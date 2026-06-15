"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/layout/Header";
import { PenTool, Smartphone, Film, Layout } from "lucide-react";

const services = [
  {
    title: "Graphisme",
    description: "Création d'identité visuelle, réalisation de maquettes et chartes graphiques complètes.",
    icon: <PenTool className="w-8 h-8 md:w-10 md:h-10 text-brand-olive shrink-0" />
  },
  {
    title: "Communication Digitale",
    description: "Stratégie de communication, création de contenu et animation de réseaux sociaux.",
    icon: <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-brand-olive shrink-0" />
  },
  {
    title: "Montage Vidéo",
    description: "Création et montage de vidéos dynamiques pour vos différents canaux de communication.",
    icon: <Film className="w-8 h-8 md:w-10 md:h-10 text-brand-olive shrink-0" />
  },
  {
    title: "Web Design",
    description: "Création d'interfaces modernes et ergonomiques pour une nouvelle expérience utilisateur.",
    icon: <Layout className="w-8 h-8 md:w-10 md:h-10 text-brand-olive shrink-0" />
  }
];

const tools = [
  { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Photoshop", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
  { name: "Illustrator", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg" },
  { name: "Premiere Pro", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" },
  { name: "After Effects", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg" }
];

const parcours = [
  {
    date: "En cours",
    title: "BUT MMI",
    subtitle: "Métiers du Multimédia et de l'Internet",
    school: "IUT de Lens",
    link: "https://www.onisep.fr/ressources/structures-enseignement/hauts-de-france/pas-de-calais/iut-de-lens-universite-d-artois/but-metiers-du-multimedia-et-de-l-internet-parcours-strategie-de-communication-numerique-et-design-d-experience"
  },
  {
    date: "2022 - 2023",
    title: "Licence Science de la Vie",
    subtitle: "Faculté des Sciences",
    school: "Jean Perrin",
    link: "https://www.onisep.fr/ressources/univers-formation/formations/post-bac/licence-mention-sciences-de-la-vie"
  },
  {
    date: "2022",
    title: "Baccalauréat Général",
    subtitle: "Spécialité SVT / Physique",
    school: "Lycée Voltaire"
  }
];

export default function AboutPage() {
  const openContact = () => window.dispatchEvent(new Event("open-contact-modal"));

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
    <main className="relative min-h-screen bg-brand-light text-brand-dark pt-32 pb-32 overflow-x-hidden">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Intro Section */}
        <section className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/2 flex flex-col justify-center">
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.03, delayChildren: 0.6 } },
                hidden: {}
              }}
              className="text-6xl md:text-[7vw] font-black uppercase tracking-tighter text-brand-blue leading-[0.85] mb-8 text-center md:text-left"
            >
              <div className="block">{renderText("À propos")}</div>
              <div className="block text-brand-olive">{renderText("De moi.")}</div>
            </motion.h1>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-medium leading-[1.6] text-brand-dark/70 flex flex-col gap-6 text-center md:text-left"
            >
              <p>
                Passionné par la création visuelle et le développement web, je suis actuellement en BUT MMI (Métiers du Multimédia et de l'Internet). Je suis à la recherche d'une alternance pour mettre en pratique mes compétences et participer à la création de projets innovants.
              </p>
              <p>
                Que ce soit en concevant des interfaces ou en codant des lignes, je cherche toujours à apprendre pour m'améliorer et proposer un travail de qualité.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-12"
            >
              <button 
                onClick={openContact}
                className="px-8 py-4 bg-brand-blue text-brand-light rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-olive hover:text-brand-dark transition-colors hover-target"
              >
                Me contacter
              </button>
              <a 
                href="/cv.pdf" 
                target="_blank"
                className="px-8 py-4 bg-brand-olive text-brand-dark rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors hover-target shadow-md"
              >
                Mon CV
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="md:w-1/2 relative h-[60vh] md:h-auto min-h-[500px] rounded-[40px] overflow-hidden bg-brand-dark/5"
          >
            {/* If photo.jpeg exists, it will use it, otherwise fallback to color */}
            <Image 
              src="/photo.jpeg" 
              alt="Allan Rogé" 
              fill 
              className="object-cover object-top" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>
        </section>

        {/* Separator */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-px bg-gradient-to-r from-transparent via-brand-dark/20 to-transparent my-20 md:my-32 origin-center" 
        />

        {/* Services Section */}
        <section className="bg-brand-blue text-brand-light w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 md:px-12 py-20 md:py-32 my-12 rounded-t-[60px] md:rounded-t-[100px]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-olive mb-12 text-center md:text-left">
              Mes <span className="text-brand-light">Compétences</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-8 md:p-12 rounded-[30px] border border-brand-light/10 hover:border-brand-olive hover:bg-brand-light/5 transition-all duration-500 group"
                >
                  <div className="flex items-center gap-4 md:gap-6 mb-6">
                    {service.icon}
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-brand-light leading-none">{service.title}</h3>
                  </div>
                  <p className="font-medium text-lg text-brand-light/70 group-hover:text-brand-light transition-colors">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Tools Section (Marquee) */}
        <section className="overflow-hidden w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pt-8 md:pt-12 pb-8 md:pb-16">
          <div className="w-full text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-blue">
              Outils de <span className="text-brand-olive">Création</span>
            </h2>
          </div>
          <div className="flex w-max animate-marquee pt-4 pb-12 md:pt-8 md:pb-20">
            {/* Duplicate twice for seamless loop */}
            <div className="flex gap-24 md:gap-32 items-center px-12 md:px-16">
               {tools.map((t, idx) => (
                 <div key={`orig-${idx}`} className="relative group flex items-center justify-center cursor-pointer shrink-0">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img 
                     src={t.url} 
                     alt={t.name} 
                     className="w-16 h-16 md:w-24 md:h-24 object-contain rounded-xl md:rounded-3xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" 
                   />
                   <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap z-10">
                     <span className="bg-brand-dark text-brand-light px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg border border-brand-light/10">
                       {t.name}
                     </span>
                   </div>
                 </div>
               ))}
            </div>
            <div className="flex gap-24 md:gap-32 items-center px-12 md:px-16">
               {tools.map((t, idx) => (
                 <div key={`dup-${idx}`} className="relative group flex items-center justify-center cursor-pointer shrink-0">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img 
                     src={t.url} 
                     alt={t.name} 
                     className="w-16 h-16 md:w-24 md:h-24 object-contain rounded-xl md:rounded-3xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" 
                   />
                   <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap z-10">
                     <span className="bg-brand-dark text-brand-light px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-lg border border-brand-light/10">
                       {t.name}
                     </span>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Separator */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-px bg-gradient-to-r from-transparent via-brand-dark/20 to-transparent my-8 md:my-16 origin-center" 
        />

        {/* Timeline Section */}
        <section className="relative">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-brand-blue mb-16 text-center">
            Mon <span className="text-brand-olive">Parcours</span>
          </h2>
          
          <div className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-8 relative">
            {/* Ligne verticale */}
            <div className="absolute left-[23px] md:left-[183px] top-10 bottom-10 w-0.5 bg-brand-dark/10" />

            {parcours.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-center gap-6 md:gap-8 relative z-10 group"
              >
                {/* Date (Desktop) */}
                <div className="hidden md:flex w-32 shrink-0 justify-end">
                  <span className="px-4 py-2 bg-brand-dark/5 text-brand-dark font-bold text-xs uppercase tracking-widest rounded-full group-hover:bg-brand-olive transition-colors">
                    {item.date}
                  </span>
                </div>

                {/* Point de la timeline */}
                <div className="w-12 shrink-0 flex justify-center relative z-10">
                  <div className="w-5 h-5 bg-brand-olive rounded-full border-4 border-brand-light shadow-sm group-hover:scale-125 transition-transform duration-300" />
                </div>
                
                {/* Carte */}
                <div className="flex-1 bg-brand-light border-2 border-brand-dark/10 p-6 md:p-8 rounded-[30px] hover:border-brand-olive hover:shadow-lg transition-all cursor-default">
                  <div className="md:hidden mb-4">
                    <span className="px-4 py-2 bg-brand-olive/20 text-brand-dark font-bold text-xs uppercase tracking-widest rounded-full">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-1 group-hover:text-brand-olive transition-colors">{item.title}</h3>
                  <p className="text-brand-dark/70 font-medium text-sm md:text-base mb-4">{item.subtitle}</p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mt-4 md:mt-6 gap-4">
                    <p className="font-bold text-sm md:text-lg uppercase tracking-tighter text-brand-blue">{item.school}</p>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[10px] md:text-xs font-bold uppercase tracking-widest bg-brand-dark text-brand-light px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:bg-brand-olive hover:text-brand-dark transition-colors flex items-center gap-2 group-hover:shadow-md w-max"
                      >
                        Consulter la formation ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Tailwind config missing keyframes for marquee, so adding inline style for marquee if needed, or rely on standard tailwind if we added it. Let's add a global CSS or inline style for the marquee. */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </main>
  );
}
