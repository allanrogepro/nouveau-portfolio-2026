"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Only run once per session
    if (sessionStorage.getItem("hasSeenPreloader")) {
      setIsLoading(false);
      return;
    }

    const duration = 2200; // 2.2 seconds loading
    const interval = 20; 
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(Math.floor((currentStep / steps) * 100), 100);
      setCounter(progress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // At 100%, trigger the exit animation
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("hasSeenPreloader", "true");
        }, 400); 
      }
    }, interval);

    document.body.style.overflow = "hidden";
    
    return () => {
      clearInterval(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
        >
          {/* 
            The SVG Mask. 
            The blue rectangle fills the screen, but the text punches a transparent hole in it.
            On exit, we scale the entire SVG massively so the hole grows to swallow the screen.
          */}
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            exit={{ scale: 150, opacity: 0 }}
            transition={{ 
              scale: { duration: 1.4, ease: [0.76, 0, 0.24, 1] },
              opacity: { duration: 0.4, delay: 0.5, ease: "linear" }
            }}
            className="absolute inset-0 flex items-center justify-center w-full h-full backdrop-blur-sm"
            style={{ transformOrigin: "47.5% 35%" }}
          >
            <svg className="w-full h-full absolute inset-0" preserveAspectRatio="xMidYMid slice">
              <defs>
                <mask id="textMask">
                  <rect width="100%" height="100%" fill="white" />
                  <text 
                    x="50%" 
                    y="35%" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    className="font-black text-[22vw] md:text-[15vw] uppercase tracking-tighter" 
                    fill="black"
                  >
                    ALLAN
                  </text>
                  <text 
                    x="50%" 
                    y="65%" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    className="font-black text-[22vw] md:text-[15vw] uppercase tracking-tighter" 
                    fill="black"
                  >
                    ROGÉ
                  </text>
                </mask>
              </defs>
              {/* Fill the background with brand-blue, applying the mask */}
              <rect width="100%" height="100%" fill="#1F4A96" mask="url(#textMask)" />
            </svg>
          </motion.div>

          {/* Loading Percentage */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-10 right-10 md:bottom-16 md:right-16 text-brand-light font-black text-6xl md:text-8xl tracking-tighter flex items-end drop-shadow-lg"
          >
            {counter} <span className="text-2xl md:text-4xl text-brand-olive mb-2 md:mb-3 ml-2">%</span>
          </motion.div>
          
          {/* Tiny detail text */}
          <motion.div 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-10 left-10 text-brand-olive font-bold text-xs tracking-[0.4em] uppercase"
          >
            Portfolio // 2026
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
