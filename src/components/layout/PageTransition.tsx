"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  const columns = 5;

  const getPageName = () => {
    if (pathname === "/") return "Accueil";
    if (pathname === "/a-propos") return "À Propos";
    if (pathname === "/projets") return "Projets";
    if (pathname.startsWith("/projet/")) return "Projet";
    return "Allan Rogé";
  };
  const validRoutes = ["/", "/a-propos", "/projets", "/mentions-legales"];
  const isValidRoute = validRoutes.includes(pathname) || pathname.startsWith("/projet/");

  return (
    <>
      {children}

      {(!isFirstMount && isValidRoute && pathname !== "/" && !pathname.startsWith("/projet/") && pathname !== "/mentions-legales") && (
        <div key={pathname} className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
          
          {/* Couche d'accent : Vert Olive (colonnes décalées) */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: columns }).map((_, i) => (
              <motion.div
                key={`olive-${i}`}
                className="relative h-full flex-1 bg-brand-olive"
                initial={{ y: "0%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: i * 0.04 }}
              />
            ))}
          </div>

          {/* Couche principale : Clair (colonnes décalées) */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: columns }).map((_, i) => (
              <motion.div
                key={`light-${i}`}
                className="relative h-full flex-1 bg-brand-light"
                initial={{ y: "0%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 + i * 0.04 }}
              />
            ))}
          </div>

          {/* Texte stylisé du nom de la page */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center mix-blend-difference"
            initial={{ y: "0%", opacity: 1 }}
            animate={{ y: "-50%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          >
            <h2 className="text-brand-light font-black text-[12vw] md:text-[8vw] uppercase tracking-tighter">
              {getPageName()}
            </h2>
          </motion.div>

        </div>
      )}
    </>
  );
}


