"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenPreloader");
    if (!hasSeen) {
      // Preloader is running. Wait for it to clear the screen.
      const timer = setTimeout(() => setStartAnim(true), 3200);
      return () => clearTimeout(timer);
    } else {
      // Normal page load / transition
      const timer = setTimeout(() => setStartAnim(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-24 pb-12 md:pt-32 md:pb-24 w-full flex flex-col justify-center overflow-hidden bg-transparent bg-grid">
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pointer-events-none">
        
        {/* Asymmetrical composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Typography */}
          <motion.div style={{ y: y1 }} className="lg:col-span-7 flex flex-col justify-center z-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={startAnim ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 1, delay: 0 }}
              className="flex items-center justify-center lg:justify-start gap-4 text-brand-dark font-bold tracking-widest uppercase text-[10px] md:text-sm mb-6"
            >
              <span className="w-8 h-0.5 bg-brand-olive hidden lg:block" />
              Designer Créatif
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Communication Digitale
            </motion.div>

            <h1 className="text-[15vw] lg:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase text-brand-blue mix-blend-multiply text-center lg:text-left">
              <div className="overflow-hidden pb-4 flex justify-center lg:justify-start">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={startAnim ? { y: "0%" } : { y: "100%" }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                  className="block"
                >
                  ALLAN
                </motion.span>
              </div>
              <div className="overflow-hidden pb-4 pt-8 -mt-8 relative z-10 flex items-center justify-center lg:justify-start">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={startAnim ? { y: "0%" } : { y: "100%" }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  className="block text-brand-olive"
                >
                  ROGÉ
                </motion.span>
              </div>
            </h1>
          </motion.div>

          {/* Right: Creative Photo Integration */}
          <motion.div style={{ y: y2 }} className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] w-full z-10">
             
             {/* Offset Blue Background Shape */}
             <motion.div 
                initial={{ scale: 0, rotate: -45 }}
                animate={startAnim ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
                transition={{ duration: 1.5, delay: 0.4, ease: "backOut" }}
                className="absolute top-[53%] left-[53%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] aspect-[4/5] bg-brand-blue rounded-[100px] rounded-tl-none z-0"
             />

             {/* Organic animated background mask */}
             <motion.div 
                initial={{ scale: 0, rotate: -45 }}
                animate={startAnim ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "backOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] aspect-[4/5] bg-brand-light rounded-[100px] rounded-tl-none overflow-hidden border-2 border-brand-blue z-10"
             >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/photo.jpeg"
                    alt="Allan Rogé"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </motion.div>
             </motion.div>

             {/* Floating decorative elements */}
             <motion.div
               initial={{ opacity: 0, scale: 0 }}
               animate={startAnim ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
               transition={{ duration: 1, delay: 1 }}
               className="absolute -right-10 top-1/4 w-32 h-32 border-[12px] border-brand-olive rounded-full border-l-transparent"
             />
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
               transition={{ duration: 1, delay: 1.2 }}
               className="absolute -left-10 bottom-1/4 w-24 h-24 bg-brand-dark rounded-[40px] rounded-br-none mix-blend-multiply"
             />

          </motion.div>
        </div>
      </motion.div>

      {/* Very slow floating foreground element */}
      <motion.div 
        animate={{ y: ["-10%", "10%", "-10%"], rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -left-20 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-brand-olive rounded-full blur-[120px] opacity-20 pointer-events-none z-0"
      />
    </section>
  );
}
