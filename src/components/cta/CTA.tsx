"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative pt-12 pb-32 px-6 md:px-12 w-full overflow-hidden flex items-center justify-center min-h-[40vh] bg-brand-light">
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full max-w-7xl bg-brand-olive rounded-[60px] md:rounded-[100px] p-12 md:p-32 text-center relative overflow-hidden"
      >
        {/* Soft Background Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full mix-blend-multiply blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-light rounded-full mix-blend-overlay blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="relative z-10">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-brand-dark uppercase tracking-tighter mb-8"
          >
            Un projet <br /> en tête ?
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl font-medium text-brand-dark/70 mb-12 max-w-2xl mx-auto"
          >
            Créons ensemble une expérience digitale mémorable.
          </motion.p>
        </div>
      </motion.div>

    </section>
  );
}
