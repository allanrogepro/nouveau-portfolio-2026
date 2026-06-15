"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isProject, setIsProject] = useState(false);

  // Smooth springs for inertia
  const cursorX = useSpring(-100, { stiffness: 250, damping: 20, mass: 0.5 });
  const cursorY = useSpring(-100, { stiffness: 250, damping: 20, mass: 0.5 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractable = !!target.closest("a, button, .hover-target");
      const isProjectArea = !!target.closest(".project-target");
      
      setIsHovered(isInteractable);
      setIsProject(isProjectArea);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="custom-cursor hidden md:flex items-center justify-center pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isProject ? 80 : isHovered ? 60 : 20,
        height: isProject ? 80 : isHovered ? 60 : 20,
        backgroundColor: isProject ? "var(--color-brand-blue)" : "var(--color-brand-olive)",
        borderRadius: isProject ? "40% 60% 70% 30% / 40% 50% 60% 50%" : "50%",
        mixBlendMode: isProject ? "normal" : "difference",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: isProject ? 1 : 0 }}
        className="text-[10px] font-bold text-brand-light uppercase tracking-widest text-center leading-none"
      >
        Voir
      </motion.span>
    </motion.div>
  );
}
