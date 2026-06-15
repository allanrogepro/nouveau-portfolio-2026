"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "La NUIT MMI",
    category: "Branding & Digital",
    slug: "la-nuit-mmi",
    image: "/placeholder-1.jpg",
    color: "bg-brand-blue"
  },
  {
    id: 2,
    title: "ClickAndBuy AUTO",
    category: "Stratégie Digitale",
    slug: "clickandbuy-auto",
    image: "/placeholder-2.jpg",
    color: "bg-brand-olive"
  },
  {
    id: 3,
    title: "VB Agencement",
    category: "Print Design",
    slug: "vb-agencement",
    image: "/placeholder-3.jpg",
    color: "bg-brand-blue"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black text-brand-blue uppercase tracking-tighter"
        >
          Projets
          <span className="block text-brand-olive">Sélectionnés</span>
        </motion.h2>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:block"
        >
          <div className="w-20 h-20 rounded-full border-4 border-brand-olive flex items-center justify-center animate-spin-slow">
            <span className="text-brand-blue font-bold text-xs">*</span>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <Link href={`/projet/${project.slug}`} key={project.id}>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="group relative w-full h-[50vh] md:h-[70vh] rounded-[40px] overflow-hidden cursor-pointer hover-target"
            >
              {/* Project Image Placeholder */}
              <div className={`absolute inset-0 w-full h-full ${project.color} transition-transform duration-700 group-hover:scale-105`}>
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                 {/* Replace with actual next/image later */}
                 <div className="w-full h-full flex items-center justify-center text-white/50 text-2xl font-bold mix-blend-overlay">
                   [Image Projet {project.id}]
                 </div>
              </div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                <div className="self-end overflow-hidden rounded-full">
                  <motion.div 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-brand-light text-brand-dark px-6 py-2 rounded-full font-bold text-sm uppercase"
                  >
                    {project.category}
                  </motion.div>
                </div>
                
                <div className="overflow-hidden">
                  <motion.h3 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black text-brand-light uppercase"
                  >
                    {project.title}
                  </motion.h3>
                </div>
              </div>

              {/* Reveal Overlay on Hover */}
              <div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
