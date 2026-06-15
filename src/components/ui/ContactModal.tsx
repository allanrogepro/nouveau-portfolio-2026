"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import emailjs from '@emailjs/browser';

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

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData({ name: "", email: "", message: "" });
      setIsSent(false);
      setIsSending(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      
      setIsSent(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      alert("Une erreur est survenue. Veuillez réessayer plus tard ou me contacter directement par email.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "circle(0% at 90% 10%)" }}
          animate={{ clipPath: "circle(150% at 90% 10%)" }}
          exit={{ clipPath: "circle(0% at 90% 10%)", transition: { duration: 0.6, ease: "easeInOut" } }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-brand-blue text-brand-light flex flex-col h-screen overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-end items-center px-6 md:px-12 py-8 w-full max-w-7xl mx-auto h-[10vh] shrink-0">
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full border border-brand-light/20 flex items-center justify-center hover:bg-brand-light hover:text-brand-blue transition-colors font-bold text-xl hover-target"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-center h-[90vh]">
            {!isSent ? (
              <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                
                {/* Left Side: Big Typo */}
                <div className="flex flex-col gap-6">
                   <h2 className="text-5xl md:text-[6vw] font-black uppercase tracking-tighter text-brand-light leading-[0.85]">
                     Lançons <br />
                     <span className="text-brand-olive">Le Projet.</span>
                   </h2>
                   <p className="text-brand-light/50 font-medium text-xl max-w-sm mt-4 mb-2">
                     Remplissez le formulaire ou envoyez-moi un email directement à : <br/>
                     <a href="mailto:allanrogepro@gmail.com" className="text-brand-light font-bold hover:text-brand-olive transition-colors hover-target mt-2 inline-block text-lg">allanrogepro@gmail.com</a>
                   </p>
                   
                   <div className="flex gap-4 mt-2">
                     <a href="https://www.linkedin.com/in/allan-roge-124747388/" target="_blank" rel="noopener noreferrer" className="text-brand-olive hover:text-brand-dark hover:bg-brand-olive transition-colors hover-target w-12 h-12 rounded-full border border-brand-olive/50 flex items-center justify-center">
                       <LinkedinIcon size={20} />
                     </a>
                     <a href="#" className="text-brand-olive hover:text-brand-dark hover:bg-brand-olive transition-colors hover-target w-12 h-12 rounded-full border border-brand-olive/50 flex items-center justify-center">
                       <InstagramIcon size={20} />
                     </a>
                   </div>
                </div>

                {/* Right Side: Classic Form */}
                <div className="flex flex-col gap-8 w-full max-w-xl">
                  <div className="flex flex-col gap-2 relative">
                    <input 
                      type="text" 
                      id="name"
                      placeholder=" "
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="peer bg-transparent border-b-2 border-brand-light/20 py-4 focus:outline-none focus:border-brand-olive transition-colors text-2xl font-bold w-full"
                    />
                    <label htmlFor="name" className="absolute top-4 left-0 text-brand-light/50 text-xl transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-olive peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text">
                      Votre Nom
                    </label>
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <input 
                      type="email" 
                      id="email"
                      placeholder=" "
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="peer bg-transparent border-b-2 border-brand-light/20 py-4 focus:outline-none focus:border-brand-olive transition-colors text-2xl font-bold w-full"
                    />
                    <label htmlFor="email" className="absolute top-4 left-0 text-brand-light/50 text-xl transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-olive peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text">
                      Adresse Email
                    </label>
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <textarea 
                      id="message"
                      rows={2}
                      placeholder=" "
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="peer bg-transparent border-b-2 border-brand-light/20 py-4 focus:outline-none focus:border-brand-olive transition-colors text-2xl font-bold w-full resize-none"
                    />
                    <label htmlFor="message" className="absolute top-4 left-0 text-brand-light/50 text-xl transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-olive peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs cursor-text">
                      Parlez-moi de votre projet
                    </label>
                  </div>
                  
                  <button type="submit" disabled={isSending} className="mt-4 px-8 py-5 bg-brand-light text-brand-blue rounded-full font-bold text-lg uppercase tracking-widest hover:bg-brand-olive hover:text-brand-dark transition-colors flex items-center justify-center gap-4 hover-target disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSending ? "Envoi en cours..." : "Envoyer le message ↗"}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-24 h-24 bg-brand-olive rounded-full mb-8 flex items-center justify-center text-brand-dark text-4xl font-black">
                  ✓
                </div>
                <h2 className="text-6xl md:text-[6vw] font-black uppercase tracking-tighter text-brand-light leading-[0.85] mb-8">
                  Message Envoyé
                </h2>
                <p className="text-2xl text-brand-light/70 font-medium mb-12">
                  Merci {formData.name.split(" ")[0]}. Je reviens vers vous très rapidement.
                </p>
                <button
                  onClick={onClose}
                  className="px-8 py-4 bg-brand-olive text-brand-dark rounded-full font-bold uppercase tracking-widest hover:bg-brand-light hover:text-brand-blue transition-colors hover-target"
                >
                  Fermer
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
