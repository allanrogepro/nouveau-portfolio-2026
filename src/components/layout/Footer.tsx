"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Hide footer on 404
  const validRoutes = ["/", "/a-propos", "/projets", "/mentions-legales"];
  const isValidRoute = validRoutes.includes(pathname) || pathname.startsWith("/projet/");
  if (!isValidRoute) return null;
  return (
    <footer className="bg-brand-dark text-brand-light pt-16 md:pt-20 pb-6 px-6 md:px-12 rounded-t-[40px] md:rounded-t-[80px] relative z-20 overflow-hidden mt-[-40px]">

      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* Top Section */}
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="flex flex-col items-start gap-8">
            <h2 className="text-brand-light text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[1.1] md:leading-[0.9]">
              Prêt à créer <br /> <span className="text-brand-olive">l'exceptionnel&nbsp;?</span>
            </h2>
            <button 
              onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
              className="inline-flex items-center justify-center gap-4 bg-brand-light text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-olive transition-colors duration-300 hover-target w-full md:w-auto shadow-lg"
            >
              Lancer un projet ↗
            </button>
          </div>

          <div className="flex flex-col md:items-end justify-end gap-10 pt-8 md:pt-0 mt-8 md:mt-0 border-t border-brand-light/10 md:border-t-0">
            <div className="flex flex-col md:text-right gap-3">
              <p className="text-brand-light/50 font-bold uppercase tracking-widest text-xs mb-2">Plan du site</p>
              <nav className="flex flex-col md:items-end gap-2">
                <Link href="/" className="text-xl md:text-3xl font-black tracking-tighter hover:text-brand-olive transition-colors hover-target">Accueil</Link>
                <Link href="/projets" className="text-xl md:text-3xl font-black tracking-tighter hover:text-brand-olive transition-colors hover-target">Projets</Link>
                <Link href="/a-propos" className="text-xl md:text-3xl font-black tracking-tighter hover:text-brand-olive transition-colors hover-target">À propos</Link>
              </nav>
            </div>
            
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/allan-roge-124747388/" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-brand-dark hover:bg-brand-olive transition-colors hover-target w-12 h-12 rounded-full border border-brand-light/20 flex items-center justify-center">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-brand-light hover:text-brand-dark hover:bg-brand-olive transition-colors hover-target w-12 h-12 rounded-full border border-brand-light/20 flex items-center justify-center">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-brand-light/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
             <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-brand-light hidden md:block">
               <Image src="/logo.png" alt="Logo Allan Rogé" fill className="object-cover opacity-80" />
             </div>
             <p className="font-bold uppercase tracking-widest text-xs text-brand-light/50 leading-relaxed md:leading-normal">
               © {new Date().getFullYear()} Allan Rogé. Tous droits réservés.<br className="md:hidden"/>
               <span className="hidden md:inline"> • </span>
               <Link href="/mentions-legales" className="hover:text-brand-light transition-colors hover-target underline underline-offset-4 mt-2 md:mt-0 inline-block md:ml-1">
                 Mentions Légales
               </Link>
             </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center justify-center gap-3 text-brand-light hover:text-brand-dark bg-brand-light/10 hover:bg-brand-olive font-bold uppercase tracking-widest text-xs transition-all duration-300 hover-target px-6 py-3 md:px-8 md:py-4 rounded-full border border-brand-light/20"
          >
            <span>Remonter</span>
            <span className="group-hover:-translate-y-1 transition-transform duration-300 text-lg leading-none">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
