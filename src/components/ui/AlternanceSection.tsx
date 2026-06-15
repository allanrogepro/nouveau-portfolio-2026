"use client";

import { motion } from "framer-motion";
import { Eye, Calendar, MapPin, Briefcase, Clock } from "lucide-react";

export default function AlternanceSection() {
  const openContact = () => window.dispatchEvent(new Event("open-contact-modal"));

  const details = [
    { icon: <Calendar className="w-6 h-6" />, label: "Début", value: "Septembre 2026" },
    { icon: <Briefcase className="w-6 h-6" />, label: "Contrat", value: "Apprentissage" },
    { icon: <Clock className="w-6 h-6" />, label: "Durée", value: "1 ou 2 ans" },
    { icon: <MapPin className="w-6 h-6" />, label: "Localisation", value: "Lens / Arras / Lille" },
  ];

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
    <section className="w-full bg-brand-blue text-brand-light pt-16 pb-[160px] md:pt-24 md:pb-[200px] px-6 md:px-12 relative z-10 overflow-x-clip">
      
      {/* Wave Top Delimiter (Pointing UP into the previous section) */}
      <div className="absolute left-0 w-full leading-[0] z-0 pointer-events-none -top-[39px] md:-top-[79px] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px] text-brand-blue">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-dark/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-olive/20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto relative z-20 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Massive Text */}
        <div className="flex-1 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-brand-olive font-bold tracking-widest uppercase text-sm"
          >
            <span className="w-12 h-0.5 bg-brand-olive" />
            Disponible en 2026
          </motion.div>

          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
              hidden: {}
            }}
            className="text-brand-light text-4xl sm:text-5xl md:text-6xl lg:text-[5.5vw] font-black uppercase tracking-tighter leading-[0.9]"
          >
            <div className="block">{renderText("Recherche")}</div>
            <div className="block text-brand-olive">{renderText("Alternance")}</div>
            <div className="block whitespace-nowrap">{renderText("en communication.")}</div>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-brand-light/90 max-w-2xl leading-[1.6]"
          >
            Je suis à la recherche d'une entreprise innovante pour m'accueillir en alternance à partir de septembre 2026. Prêt à m'investir dans vos projets de design, communication digitale et création de contenu.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 mt-4"
          >
            <button 
              onClick={openContact}
              className="flex items-center gap-3 bg-brand-olive text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-light transition-colors hover-target"
            >
              Me contacter ↗
            </button>
            <a 
              href="/cv.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-transparent border-2 border-brand-light/20 text-brand-light px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-light hover:text-brand-dark hover:border-brand-light transition-colors hover-target"
            >
              <Eye className="w-5 h-5" />
              VOIR MON CV
            </a>
          </motion.div>
        </div>

        {/* Right Side: Grid Information */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[45%] grid grid-cols-2 gap-3 md:gap-4"
        >
          {details.map((detail, idx) => (
            <div 
              key={idx} 
              className="bg-brand-light/10 border border-brand-light/20 p-5 md:p-6 rounded-[24px] md:rounded-[30px] flex flex-col justify-between h-full hover:bg-brand-light/20 hover:border-brand-light/50 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-light/20 text-brand-light flex items-center justify-center mb-4 shrink-0">
                {detail.icon}
              </div>
              <div className="mt-auto">
                <p className="text-brand-light/50 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-1 md:mb-2">{detail.label}</p>
                <p className="font-bold text-sm md:text-base lg:text-lg leading-tight">{detail.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
