"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef, MouseEvent } from "react";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section ref={ref} className="relative py-32 px-6 md:px-12 w-full overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      
      {/* Background shape */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-[-1] bg-brand-blue rounded-t-[100px] flex items-center justify-center"
      >
        <div className="w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] rounded-full border border-brand-light/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[100vw] h-[100vw] md:w-[60vw] md:h-[60vw] rounded-full border border-brand-light/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      <div className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-brand-light uppercase tracking-tighter mb-12"
        >
          Prêt à créer <br />
          <span className="text-brand-olive">l'impact ?</span>
        </motion.h2>

        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
          className="mb-20"
        >
          <div 
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="p-10 cursor-pointer"
          >
            <motion.div
              animate={{ x: position.x, y: position.y }}
              transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
              className="bg-brand-olive text-brand-dark px-10 py-6 rounded-full font-black text-2xl md:text-4xl hover-target flex items-center gap-4"
            >
              TRAVAILLONS ENSEMBLE
              <div className="w-12 h-12 bg-brand-dark text-brand-olive rounded-full flex items-center justify-center">
                <ArrowUpRight strokeWidth={3} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 text-brand-light font-bold text-xl uppercase tracking-widest"
        >
          <a href="#" className="hover:text-brand-olive transition-colors flex items-center gap-2 hover-target">
            Email <ArrowUpRight className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/allan-roge-124747388/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-olive transition-colors flex items-center gap-2 hover-target">
            LinkedIn <ArrowUpRight className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-brand-olive transition-colors flex items-center gap-2 hover-target">
            Instagram <ArrowUpRight className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-brand-olive transition-colors flex items-center gap-2 hover-target">
            CV <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 left-6 text-brand-light/50 font-medium text-sm">
        © 2026 ROGÉ Allan
      </div>
    </section>
  );
}
