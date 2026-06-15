"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ContactModal from "@/components/ui/ContactModal";
import { ArrowUpRight, X, Menu } from "lucide-react";

export default function Header({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen || isMenuOpen ? "hidden" : "";
  }, [isModalOpen, isMenuOpen]);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("open-contact-modal", handleOpenModal);
    return () => window.removeEventListener("open-contact-modal", handleOpenModal);
  }, []);

  const isHomeActive = pathname === "/";
  const isProjectsActive = pathname === "/projets" || pathname?.startsWith("/projet/");
  const isAboutActive = pathname === "/a-propos";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full z-40 px-4 md:px-8 flex justify-center mt-4 transition-all duration-500 pointer-events-none"
      >
        <div 
          className={`flex justify-between items-center w-full max-w-7xl transition-all duration-700 pointer-events-auto ${
            (scrolled || forceScrolled)
              ? "bg-brand-light/80 backdrop-blur-xl py-2 px-6 md:px-8 rounded-[40px] shadow-md border-b border-transparent" 
              : "bg-transparent py-4 px-2 md:px-4 border-b border-brand-dark/10"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="hover-target block">
            <motion.div 
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-xl md:rounded-2xl opacity-90 hover:opacity-100 transition-opacity"
            >
              <Image 
                src="/logo.png" 
                alt="Allan Rogé" 
                fill 
                className="object-cover" 
                priority 
              />
            </motion.div>
          </Link>
          
          {/* Animated Decorative Shape (Originalité) */}
          <motion.div
            animate={{
              borderRadius: [
                "40% 60% 70% 30% / 40% 50% 60% 50%",
                "50% 50% 20% 80% / 25% 80% 20% 75%",
                "40% 60% 70% 30% / 40% 50% 60% 50%"
              ],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 bg-brand-olive hidden md:block opacity-60"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/projets" 
              className={`relative font-bold hover:text-brand-olive transition-colors hover-target uppercase tracking-widest text-[11px] md:text-[13px] ${isProjectsActive ? "text-brand-olive" : "text-brand-dark"}`}
            >
              Projets
              {isProjectsActive && (
                <motion.div 
                  layoutId="nav-indicator" 
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-olive rounded-full" 
                />
              )}
            </Link>
            <Link 
              href="/a-propos" 
              className={`relative font-bold hover:text-brand-olive transition-colors hover-target uppercase tracking-widest text-[11px] md:text-[13px] ${isAboutActive ? "text-brand-olive" : "text-brand-dark"}`}
            >
              À propos
              {isAboutActive && (
                <motion.div 
                  layoutId="nav-indicator" 
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-olive rounded-full" 
                />
              )}
            </Link>

            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-brand-blue text-brand-light px-6 py-2.5 rounded-full font-bold uppercase tracking-widest text-[11px] md:text-[13px] overflow-hidden hover-target border border-brand-light/10 ml-4"
            >
              {/* Infinite Shine Effect */}
              <motion.div
                animate={{ x: ["-200%", "300%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatDelay: 2 }}
                className="absolute inset-0 z-0 w-1/2 h-full bg-gradient-to-r from-transparent via-brand-light/20 to-transparent skew-x-[30deg]"
              />

              {/* Background fill on hover */}
              <div className="absolute inset-0 bg-brand-olive scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[0.76,0,0.24,1] z-0" />

              {/* Rolling Text */}
              <div className="relative z-10 overflow-hidden">
                <div className="transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:-translate-y-full flex flex-col">
                  <span className="block">Discutons</span>
                  <span className="block absolute top-full text-brand-dark">Discutons</span>
                </div>
              </div>
            </motion.button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-dark hover-target z-50 relative p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} className="text-brand-light" /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Mobile Menu (Organic shape deploy) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(200% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-brand-olive flex flex-col justify-center px-12"
          >
            <div className="absolute top-8 right-8 z-50">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-3 text-brand-dark rounded-full bg-brand-light/20 hover:bg-brand-light/40 transition-colors"
              >
                <X size={32} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8 text-5xl font-black uppercase tracking-tighter text-brand-dark">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-4 transition-colors ${isHomeActive ? "text-brand-light" : "hover:text-brand-light"}`}
              >
                {isHomeActive && <span className="w-3 h-3 bg-brand-light rounded-full mb-1" />}
                Accueil
              </Link>
              <Link 
                href="/projets" 
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-4 transition-colors ${isProjectsActive ? "text-brand-light" : "hover:text-brand-light"}`}
              >
                {isProjectsActive && <span className="w-3 h-3 bg-brand-light rounded-full mb-1" />}
                Projets
              </Link>
              <Link 
                href="/a-propos" 
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-4 transition-colors ${isAboutActive ? "text-brand-light" : "hover:text-brand-light"}`}
              >
                {isAboutActive && <span className="w-3 h-3 bg-brand-light rounded-full mb-1" />}
                À propos
              </Link>

              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => setIsModalOpen(true), 500);
                }}
                className="text-left mt-8 text-brand-blue"
              >
                Discutons
              </button>
            </nav>
            {/* Decorative shape */}
            <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-brand-light rounded-tl-full opacity-20 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Fullscreen Contact Modal via Component */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
