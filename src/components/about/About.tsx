"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col items-center">
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-4xl"
      >
        {/* À PROPOS Tag */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-brand-olive text-brand-light px-8 py-2 rounded-full font-bold text-2xl tracking-widest shadow-lg">
            À PROPOS
          </div>
        </div>
        
        {/* Chevrons Decor */}
        <div className="absolute -top-10 right-10 flex gap-1 text-brand-olive opacity-80">
           <svg width="60" height="20" viewBox="0 0 60 20">
             <path d="M0,10 L10,0 L20,10 L10,20 Z" fill="currentColor" transform="translate(0, 0)" />
             <path d="M0,10 L10,0 L20,10 L10,20 Z" fill="currentColor" transform="translate(15, 0)" />
             <path d="M0,10 L10,0 L20,10 L10,20 Z" fill="currentColor" transform="translate(30, 0)" />
             <path d="M0,10 L10,0 L20,10 L10,20 Z" fill="currentColor" transform="translate(45, 0)" />
           </svg>
        </div>

        {/* Main Blue Bubble */}
        <div className="bg-brand-blue rounded-[40px] p-10 md:p-16 relative shadow-xl hover-target">
          
          {/* Bubble Tail Top Left */}
          <div className="absolute -top-8 left-16 w-0 h-0 border-l-[20px] border-l-transparent border-b-[40px] border-b-brand-blue border-r-[20px] border-r-transparent" />
          
          {/* Bubble Tail Bottom Right */}
          <div className="absolute -bottom-8 right-16 w-0 h-0 border-l-[20px] border-l-transparent border-t-[40px] border-t-brand-blue border-r-[20px] border-r-transparent" />

          <p className="text-brand-light text-xl md:text-3xl font-medium leading-relaxed text-center">
            Créatif, rigoureux et orienté résultats. J'intègre la 3e année de BUT MMI avec un
            objectif clair : mettre mes compétences en print, digital et branding au service de
            votre marque. <br />
            <span className="font-black mt-4 block">Disponible pour une alternance d'un an dès septembre 2026</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
