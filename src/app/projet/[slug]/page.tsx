"use client";

import { useEffect, useRef, use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/layout/Header";
import { getProjectBySlug, projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Parallax Hero
      gsap.to(".hero-bg", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Reveal text
      gsap.utils.toArray(".reveal-text").forEach((text: any) => {
        gsap.from(text, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
          }
        });
      });

      // Image Parallax
      gsap.utils.toArray(".parallax-img").forEach((img: any) => {
        gsap.to(img, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="relative w-full min-h-screen bg-brand-light text-brand-dark overflow-hidden">
      <Header forceScrolled={true} />
      
      {/* 1. Hero projet */}
      <section className="hero-section relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 w-full bg-brand-blue overflow-hidden">
        <div className="hero-bg absolute inset-0 z-0 bg-brand-dark mix-blend-overlay opacity-30" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
          <Link href="/projets" className="inline-flex items-center gap-3 font-bold bg-brand-olive text-brand-dark px-6 py-3 rounded-full hover:bg-brand-light transition-colors duration-300 mb-8 uppercase tracking-widest w-max hover-target shadow-lg">
            <ArrowLeft className="w-5 h-5" /> Retour à la Galerie
          </Link>
          <div className="overflow-hidden">
            <h1 className="reveal-text text-5xl md:text-[7vw] font-black text-brand-light uppercase tracking-tighter leading-none">
              {project.title}
            </h1>
          </div>
          <div className="flex flex-wrap gap-8 mt-12 text-brand-light/70 uppercase tracking-widest text-sm font-bold">
            <p>Rôle : {project.role}</p>
            <p>Année : {project.year}</p>
            <p>Client : {project.client}</p>
          </div>
        </div>
      </section>

      {/* Content wrapper */}
      <div className="relative z-20 bg-brand-light rounded-t-[60px] md:rounded-t-[100px] -mt-[60px] md:-mt-[100px] px-6 md:px-12 py-32 w-full">
        <div className="max-w-5xl mx-auto flex flex-col gap-32">
          
          {/* Large Image */}
          <div 
            className="w-full h-[70vh] rounded-[40px] overflow-hidden bg-brand-blue relative cursor-pointer group"
            onClick={() => project.images.hero && setLightboxImage(project.images.hero)}
          >
            {project.images.hero && (
               <img src={project.images.hero} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            )}
            {!project.images.hero && <div className="absolute inset-0 flex items-center justify-center text-brand-light/50 font-bold text-2xl">[ Visuel Haute Définition ]</div>}
          </div>

          {/* 3. Challenge & 4. Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="reveal-text text-sm font-bold text-brand-blue uppercase tracking-widest mb-8">01. Le Défi</h2>
              <p className="reveal-text text-xl font-medium leading-relaxed text-brand-dark/70">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="reveal-text text-sm font-bold text-brand-blue uppercase tracking-widest mb-8">02. Le Processus</h2>
              <p className="reveal-text text-xl font-medium leading-relaxed text-brand-dark/70">
                {project.process}
              </p>
            </div>
          </div>

          {/* 5. Logiciels */}
          <div className="bg-brand-olive rounded-[40px] p-12 md:p-24 text-brand-dark relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-light rounded-full mix-blend-overlay blur-3xl opacity-50" />
            
            <h2 className="reveal-text text-sm font-bold uppercase tracking-widest mb-8">03. Outils & Logiciels</h2>
            <p className="reveal-text text-2xl md:text-4xl font-black leading-tight mb-12">
              {project.resultHeadline}
            </p>
            
            <div className="flex flex-wrap gap-4 md:gap-6">
              {project.software?.map((soft, idx) => {
                const getIcon = (name: string) => {
                  const n = name.toLowerCase();
                  if (n.includes("figma")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg";
                  if (n.includes("photoshop")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg";
                  if (n.includes("illustrator")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg";
                  if (n.includes("premiere")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg";
                  if (n.includes("after effects")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg";
                  if (n.includes("vs code") || n.includes("vscode")) return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg";
                  return null;
                };
                const iconUrl = getIcon(soft);

                return (
                  <div key={idx} className="reveal-text bg-brand-light text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm md:text-base flex items-center gap-3 shadow-md border border-brand-dark/10">
                    {iconUrl && <img src={iconUrl} alt={soft} className="w-5 h-5 md:w-6 md:h-6 object-contain" />}
                    {soft}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 7. Galerie */}
          {(project.images.detail1 || project.images.detail2 || project.images.detail3 || project.images.detail4) && (
            <div className="flex flex-col gap-8">
              <h2 className="reveal-text text-sm font-bold text-brand-blue uppercase tracking-widest">04. Galerie</h2>
              
              {(project.images.detail1 || project.images.detail2) && (
                <div className={`grid grid-cols-1 ${project.images.detail1 && project.images.detail2 ? "md:grid-cols-2 gap-8" : ""}`}>
                  {project.images.detail1 && (
                    <div 
                      className={`${project.images.detail2 ? "h-[50vh]" : "h-[60vh] md:h-[80vh] w-full"} rounded-[30px] bg-brand-dark overflow-hidden relative group cursor-pointer`}
                      onClick={() => project.images.detail1 && setLightboxImage(project.images.detail1)}
                    >
                       <img src={project.images.detail1} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                  {project.images.detail2 && (
                    <div 
                      className={`${project.images.detail1 ? "h-[50vh] mt-0 md:mt-16" : "h-[60vh] md:h-[80vh] w-full"} rounded-[30px] bg-brand-dark overflow-hidden relative group cursor-pointer`}
                      onClick={() => project.images.detail2 && setLightboxImage(project.images.detail2)}
                    >
                       <img src={project.images.detail2} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                </div>
              )}

              {(project.images.detail3 || project.images.detail4) && (
                <div className={`grid grid-cols-1 ${project.images.detail3 && project.images.detail4 ? "md:grid-cols-2 gap-8 md:mt-16" : ""}`}>
                  {project.images.detail3 && (
                    <div 
                      className={`${project.images.detail4 ? "h-[50vh]" : "h-[60vh] md:h-[80vh] w-full"} rounded-[30px] bg-brand-dark overflow-hidden relative group cursor-pointer`}
                      onClick={() => project.images.detail3 && setLightboxImage(project.images.detail3)}
                    >
                       <img src={project.images.detail3} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                  {project.images.detail4 && (
                    <div 
                      className={`${project.images.detail3 ? "h-[50vh] mt-0 md:mt-16" : "h-[60vh] md:h-[80vh] w-full"} rounded-[30px] bg-brand-dark overflow-hidden relative group cursor-pointer`}
                      onClick={() => project.images.detail4 && setLightboxImage(project.images.detail4)}
                    >
                       <img src={project.images.detail4} alt="" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

          {/* 8. Navigation de Projet */}
          <div className="w-full flex flex-col gap-8 md:gap-12">
            <div className="w-full h-px bg-brand-dark/10" />
            <div className="flex justify-between items-center w-full gap-4 md:gap-8">
              {/* Prev */}
              <Link href={`/projet/${prevProject.slug}`} className="group flex flex-col items-start gap-2 md:gap-4 hover-target w-1/2">
                <span className="text-brand-dark/50 font-bold uppercase tracking-widest text-xs md:text-sm flex items-center gap-2 group-hover:text-brand-olive transition-colors">
                  <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" /> Projet Précédent
                </span>
                <span className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-brand-dark group-hover:text-brand-blue group-hover:translate-x-2 transition-all duration-300">
                  {prevProject.title}
                </span>
              </Link>
              
              {/* Next */}
              <Link href={`/projet/${nextProject.slug}`} className="group flex flex-col items-end gap-2 md:gap-4 hover-target w-1/2 text-right">
                <span className="text-brand-dark/50 font-bold uppercase tracking-widest text-xs md:text-sm flex items-center gap-2 group-hover:text-brand-olive transition-colors">
                  Projet Suivant <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </span>
                <span className="text-2xl md:text-5xl font-black uppercase tracking-tighter text-brand-dark group-hover:text-brand-blue group-hover:-translate-x-2 transition-all duration-300">
                  {nextProject.title}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <div className="absolute top-8 right-8 text-brand-light cursor-pointer">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </div>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightboxImage}
              alt="Vue plein écran"
              className="w-full h-full object-contain max-w-7xl mx-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
