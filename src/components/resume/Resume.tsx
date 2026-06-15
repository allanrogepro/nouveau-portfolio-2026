"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Resume() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 px-6 md:px-12 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* Left Column: Formations & Compétences */}
      <div className="flex flex-col gap-12">
        
        {/* Formations */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-6 left-10 z-10">
            <div className="bg-brand-blue text-brand-light px-8 py-2 rounded-full font-bold text-xl uppercase">
              Formations
            </div>
          </div>
          <div className="bg-brand-olive rounded-[30px] p-10 pt-16 hover-target text-brand-light shadow-xl">
            <div className="flex flex-col gap-8">
              <div className="relative pl-6 border-l-2 border-brand-light">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brand-light" />
                <h3 className="font-bold text-2xl">BUT MMI</h3>
                <p className="font-medium opacity-90">IUT de Lens &nbsp;|&nbsp; 2024 - Actuel</p>
              </div>
              <div className="relative pl-6 border-l-2 border-brand-light">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brand-light" />
                <h3 className="font-bold text-2xl">Baccalauréat Général</h3>
                <p className="font-medium opacity-90">Lycée Voltaire &nbsp;|&nbsp; 2022</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Compétences */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-8"
        >
          <div className="absolute -top-6 left-10 z-10">
            <div className="bg-brand-blue text-brand-light px-8 py-2 rounded-full font-bold text-xl uppercase">
              Compétences
            </div>
          </div>
          <div className="bg-brand-olive/30 border-2 border-brand-olive rounded-[30px] p-10 pt-16 flex flex-wrap gap-4">
            {/* Logiciels (Ps, Ai, Pr, Figma, Id) */}
            <div className="flex gap-2">
              <div className="w-16 h-16 bg-brand-blue text-brand-light rounded-[16px] flex items-center justify-center text-2xl font-bold hover:scale-110 transition-transform">Ps</div>
              <div className="w-16 h-16 bg-brand-blue text-brand-light rounded-[16px] flex items-center justify-center text-2xl font-bold hover:scale-110 transition-transform">Ai</div>
              <div className="w-16 h-16 bg-brand-blue text-brand-light rounded-[16px] flex items-center justify-center text-2xl font-bold hover:scale-110 transition-transform">Pr</div>
            </div>
            <div className="flex gap-2">
              <div className="w-16 h-16 bg-brand-blue text-brand-light rounded-[16px] flex items-center justify-center text-2xl font-bold hover:scale-110 transition-transform">Fm</div>
              <div className="w-16 h-16 bg-brand-blue text-brand-light rounded-[16px] flex items-center justify-center text-2xl font-bold hover:scale-110 transition-transform">Id</div>
            </div>
            
            <div className="flex flex-col gap-2 ml-auto">
              <span className="bg-brand-blue text-brand-light px-4 py-2 rounded-full text-sm font-bold text-center">Social Media</span>
              <span className="bg-brand-blue text-brand-light px-4 py-2 rounded-full text-sm font-bold text-center">Branding</span>
              <span className="bg-brand-blue text-brand-light px-4 py-2 rounded-full text-sm font-bold text-center">Print/Digital</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Right Column: Expériences */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div className="absolute -top-6 right-10 z-10">
          <div className="bg-brand-olive text-brand-light px-8 py-2 rounded-full font-bold text-xl uppercase">
            Expériences
          </div>
        </div>
        
        {/* Abstract Wavy lines for decor */}
        <div className="absolute -right-16 top-1/2 opacity-50 hidden lg:block">
           <svg width="60" height="60" viewBox="0 0 60 60">
             <path d="M0,10 Q15,-5 30,10 T60,10" fill="none" stroke="var(--color-brand-olive)" strokeWidth="4" />
             <path d="M0,25 Q15,10 30,25 T60,25" fill="none" stroke="var(--color-brand-olive)" strokeWidth="4" />
             <path d="M0,40 Q15,25 30,40 T60,40" fill="none" stroke="var(--color-brand-olive)" strokeWidth="4" />
           </svg>
        </div>

        <div className="bg-brand-blue rounded-[40px] p-10 pt-16 h-full text-brand-light shadow-xl relative">
           {/* Bubble Tail left */}
           <div className="absolute top-16 -left-6 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[24px] border-r-brand-blue" />

           <div className="flex flex-col gap-8 h-full relative">
             <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-brand-light/30" />
             
             <div className="relative pl-8 hover-target">
                <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-brand-light" />
                <h3 className="font-bold text-xl">Chargé de communication</h3>
                <p className="font-medium text-brand-olive">ClickAndBuy AUTO &nbsp;|&nbsp; 2025</p>
                <p className="mt-2 text-brand-light/90 text-sm">Stratégie digitale, création graphique et production de contenus.</p>
             </div>

             <div className="relative pl-8 hover-target">
                <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-brand-light" />
                <h3 className="font-bold text-xl">Graphiste</h3>
                <p className="font-medium text-brand-olive">La NUIT MMI &nbsp;|&nbsp; Jan 2026</p>
                <p className="mt-2 text-brand-light/90 text-sm">Création de supports Print et Digital.</p>
             </div>

             <div className="relative pl-8 hover-target">
                <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-brand-light" />
                <h3 className="font-bold text-xl">Graphiste</h3>
                <p className="font-medium text-brand-olive">VB Agencement &nbsp;|&nbsp; Sep 2025</p>
                <p className="mt-2 text-brand-light/90 text-sm">Création de carte de visite.</p>
             </div>
           </div>
        </div>
      </motion.div>
      
    </section>
  );
}
