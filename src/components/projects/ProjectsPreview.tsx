"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="pt-32 pb-12 px-6 md:px-12 w-full max-w-7xl mx-auto bg-brand-light relative z-20 rounded-t-[60px] md:rounded-t-[100px] mt-[-100px]">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 relative">
        
        {/* Decorative Floating Shape */}
        <div className="absolute -top-8 left-1/3 w-12 h-12 border-[4px] border-brand-olive rounded-full border-t-transparent opacity-60 hidden md:block pointer-events-none animate-[spin_20s_linear_infinite]" />

        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-brand-blue uppercase tracking-tighter"
        >
          Mes derniers <br />
          <span className="text-brand-olive">Projets</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/projets" className="group flex items-center gap-4 text-xl font-bold uppercase tracking-widest hover:text-brand-olive transition-colors hover-target">
            Voir tous les projets
            <div className="w-12 h-12 rounded-full border-2 border-brand-dark group-hover:border-brand-olive flex items-center justify-center transition-colors">
              <ArrowRight />
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.slice(0, 3).map((project, index) => (
          <Link href={`/projet/${project.slug}`} key={project.slug} className={`project-target ${index === 2 ? "md:col-span-2" : ""}`}>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className={`group relative w-full ${index === 2 ? "h-[60vh]" : "h-[50vh] md:h-[70vh]"} rounded-[40px] overflow-hidden cursor-pointer`}
            >
              <div className={`absolute inset-0 w-full h-full ${project.color} transition-transform duration-1000 group-hover:scale-105 flex items-center justify-center`}>
                 {project.images?.main ? (
                   <img src={project.images.main} alt={project.title} className="w-full h-full object-cover" />
                 ) : (
                   <span className="text-brand-light/30 font-black text-4xl uppercase tracking-widest mix-blend-overlay">
                     [ VISUEL ]
                   </span>
                 )}
              </div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="self-end overflow-hidden rounded-full">
                  <div className="bg-brand-light text-brand-dark px-6 py-2 rounded-full font-bold text-sm uppercase">
                    {project.category}
                  </div>
                </div>
                
                <div className="overflow-hidden pb-4">
                  <h3 className="text-4xl md:text-6xl font-black text-brand-light uppercase transform translate-y-12 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-24 flex justify-center w-full"
      >
        <Link href="/projets" className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden rounded-full font-black uppercase tracking-[0.2em] text-sm md:text-lg bg-brand-blue text-brand-light hover-target shadow-xl">
           <span className="absolute inset-0 w-full h-full bg-brand-olive transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[0.6s] ease-[cubic-bezier(0.76,0,0.24,1)]"></span>
           <span className="relative z-10 flex items-center gap-4 group-hover:text-brand-dark transition-colors duration-300">
             Explorer tout le portfolio
             <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
           </span>
        </Link>
      </motion.div>
    </section>
  );
}
