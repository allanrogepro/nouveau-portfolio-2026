"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Header from "@/components/layout/Header";

import { useRouter } from "next/navigation";

import { ArrowDown, ArrowUp } from "lucide-react";
import { projects as allProjects } from "@/data/projects";

const categories = ["Tous", ...Array.from(new Set(allProjects.map(p => p.category)))];

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [sortOrder, setSortOrder] = useState<"recent" | "ancien">("recent");
  const router = useRouter();
  const [expandingProject, setExpandingProject] = useState<{slug: string, rect: DOMRect, image: string} | null>(null);

  // Filtrer par catégorie
  let filteredProjects = activeFilter === "Tous" 
    ? [...allProjects] 
    : allProjects.filter((p) => p.category === activeFilter);

  // Trier par année
  filteredProjects.sort((a, b) => {
    const yearA = parseInt(a.year) || 0;
    const yearB = parseInt(b.year) || 0;
    return sortOrder === "recent" ? yearB - yearA : yearA - yearB;
  });

  const handleProjectClick = (e: React.MouseEvent, project: any) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLElement;
    // Remonter jusqu'au conteneur parent pour trouver l'image
    const linkElement = target.closest('.project-target');
    const imgContainer = linkElement?.querySelector('.img-container');
    
    if (imgContainer) {
      const rect = imgContainer.getBoundingClientRect();
      setExpandingProject({
        slug: project.slug,
        rect,
        image: project.images?.main || ""
      });
      // Attendre que l'animation d'expansion et le fondu bleu soient terminés avant de changer de page
      setTimeout(() => {
        router.push(`/projet/${project.slug}`);
      }, 800);
    } else {
      router.push(`/projet/${project.slug}`);
    }
  };

  const renderText = (text: string) => (
    <>
      {text.split(" ").map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIdx) => (
            <motion.span 
              key={charIdx} 
              variants={{
                hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
                visible: { opacity: 1, filter: "blur(0px)", y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </>
  );

  return (
    <main className="relative min-h-screen bg-brand-light text-brand-dark pt-32 pb-32">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="mb-20 flex flex-col md:flex-row justify-between md:items-end gap-8">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.03, delayChildren: 0.8 } },
              hidden: {}
            }}
            className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter text-brand-blue leading-[0.95]"
          >
            <div className="block">{renderText("MES")}</div>
            <div className="block text-brand-olive">{renderText("CRÉATIONS")}</div>
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl font-bold tracking-widest uppercase text-brand-dark/50 max-w-xs"
          >
            Une sélection de projets mêlant design et technologie.
          </motion.p>
        </div>

        {/* Filter & Sort Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover-target ${
                  activeFilter === cat 
                    ? "bg-brand-dark text-brand-light" 
                    : "bg-transparent border border-brand-dark/20 text-brand-dark hover:border-brand-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Buttons (Segmented Control) */}
          <div className="flex items-center p-1 rounded-full border border-brand-dark/20 shrink-0">
            <button
              onClick={() => setSortOrder("recent")}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover-target ${
                sortOrder === "recent" ? "bg-brand-dark text-brand-light shadow-md" : "text-brand-dark/50 hover:text-brand-dark"
              }`}
              title="Plus récent"
            >
              <ArrowDown className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest hidden md:inline">Récent</span>
            </button>
            <button
              onClick={() => setSortOrder("ancien")}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover-target ${
                sortOrder === "ancien" ? "bg-brand-dark text-brand-light shadow-md" : "text-brand-dark/50 hover:text-brand-dark"
              }`}
              title="Plus ancien"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest hidden md:inline">Ancien</span>
            </button>
          </div>
        </motion.div>

        {/* Editorial Asymmetrical Layout using Flexbox for perfect centering */}
        <motion.div layout className="flex flex-wrap justify-center gap-8 md:gap-x-12 md:gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Use flex-grow so items always fill the row completely, eliminating side margins.
              // A small + small will grow to 50/50. A small + medium will grow to 40/60.
              let widthClass = "w-full"; // large
              if (project.size === "small") widthClass = "w-full md:w-[35%] flex-grow";
              if (project.size === "medium") widthClass = "w-full md:w-[55%] flex-grow";

              // Add top margin to stagger items for the masonry feel
              // Only apply to items that are side-by-side (not large)
              const marginTop = project.size !== "large" && idx % 2 !== 0 ? "md:mt-32" : "";

              return (
                <motion.div
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -60, filter: "blur(10px)", transition: { duration: 0.3 } }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], layout: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                  className={`${widthClass} ${marginTop}`}
                >
                  <a href={`/projet/${project.slug}`} onClick={(e) => handleProjectClick(e, project)} className="project-target group block h-full flex flex-col gap-6">
                    <div className={`img-container relative w-full ${project.size === "large" ? "h-[60vh] md:h-[80vh]" : "h-[50vh]"} rounded-[40px] overflow-hidden bg-brand-dark`}>
                      <div className={`absolute inset-0 w-full h-full ${project.color} transition-transform duration-1000 group-hover:scale-105 flex items-center justify-center`}>
                        {project.images?.main ? (
                          <img src={project.images.main} alt={project.title} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-white/30 font-bold mix-blend-overlay uppercase tracking-widest">
                            [ Visuel {project.title} ]
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-brand-blue group-hover:text-brand-olive transition-colors">
                          {project.title}
                        </h2>
                        <span className="text-brand-dark/50 font-bold text-sm tracking-widest uppercase mt-2 block">
                          {project.category}
                        </span>
                      </div>
                      <span className="text-brand-dark font-black text-xl">{project.year}</span>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Animation d'expansion fluide vers la page Projet */}
      {expandingProject && (
        <motion.div
          className="fixed z-[200] overflow-hidden pointer-events-none"
          initial={{
            top: expandingProject.rect.top,
            left: expandingProject.rect.left,
            width: expandingProject.rect.width,
            height: expandingProject.rect.height,
            borderRadius: "40px"
          }}
          animate={{
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            borderRadius: "0px"
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {expandingProject.image ? (
            <img src={expandingProject.image} alt="transition" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-brand-dark" />
          )}
          
          {/* Fondu au bleu pour correspondre au Hero de la nouvelle page */}
          <motion.div 
            className="absolute inset-0 bg-brand-blue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          />
        </motion.div>
      )}

    </main>
  );
}
