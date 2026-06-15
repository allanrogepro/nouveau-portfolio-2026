"use client";

import { motion, useMotionValue, useSpring, useTransform, useAnimationFrame, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Gamepad2, RotateCcw } from "lucide-react";

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);
  const [mode, setMode] = useState<"404" | "game">("404");
  const [gameState, setGameState] = useState<"start" | "playing" | "gameover">("start");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // --- MOUSE TRACKING FOR 404 ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothNormX = useSpring(normX, springConfig);
  const smoothNormY = useSpring(normY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    mouseX.set(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    mouseY.set(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      normX.set((e.clientX / window.innerWidth) * 2 - 1);
      normY.set((e.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, normX, normY]);

  // Parallax transforms
  const x1 = useTransform(smoothNormX, [-1, 1], [-80, 80]);
  const y1 = useTransform(smoothNormY, [-1, 1], [-80, 80]);
  const x2 = useTransform(smoothNormX, [-1, 1], [80, -80]);
  const y2 = useTransform(smoothNormY, [-1, 1], [80, -80]);
  const rotateX = useTransform(smoothNormY, [-1, 1], [15, -15]);
  const rotateY = useTransform(smoothNormX, [-1, 1], [-15, 15]);

  // --- GAME ENGINE ---
  const playerRef = useRef<HTMLDivElement>(null);
  const obstacleRef = useRef<HTMLDivElement>(null);

  const playerY = useRef(0);
  const velocity = useRef(0);
  const obstacleX = useRef(1000);
  const isJumping = useRef(false);
  const speed = useRef(8);

  const gravity = 0.6;
  const jumpPower = -12;

  useAnimationFrame((t, delta) => {
    if (gameState !== "playing" || mode !== "game") return;

    // Physics
    velocity.current += gravity;
    playerY.current += velocity.current;

    // Floor collision
    if (playerY.current > 0) {
      playerY.current = 0;
      isJumping.current = false;
      velocity.current = 0;
    }

    // Obstacle movement
    obstacleX.current -= speed.current;
    if (obstacleX.current < -100) {
      // Add a slight random delay before the next obstacle appears
      obstacleX.current = window.innerWidth + (Math.random() * 200);
      setScore(s => s + 10);
      // Aggressive speed increase to make it very difficult quickly
      speed.current += 0.8; 
    }

    // Hitbox collision
    // Player is fixed at left: 10% (around 100px-150px). Width is 40px (10vw approx).
    // Let's use bounding rects for precise collision
    if (playerRef.current && obstacleRef.current) {
      const pRect = playerRef.current.getBoundingClientRect();
      const oRect = obstacleRef.current.getBoundingClientRect();

      // Shrink hitboxes slightly for fairness
      const padding = 10;
      if (
        pRect.right - padding > oRect.left + padding &&
        pRect.left + padding < oRect.right - padding &&
        pRect.bottom - padding > oRect.top + padding
      ) {
        setGameState("gameover");
        if (score > highScore) setHighScore(score);
      }
    }

    // Render DOM directly for 60fps performance
    if (playerRef.current) playerRef.current.style.transform = `translateY(${playerY.current}px)`;
    if (obstacleRef.current) obstacleRef.current.style.transform = `translateX(${obstacleX.current}px)`;
  });

  const jump = () => {
    if (mode !== "game") return;
    if (!isJumping.current && gameState === "playing") {
      velocity.current = jumpPower;
      isJumping.current = true;
    } else if (gameState === "start" || gameState === "gameover") {
      setGameState("playing");
      obstacleX.current = window.innerWidth;
      playerY.current = 0;
      setScore(0);
      speed.current = 10 + (window.innerWidth < 768 ? -2 : 0); // Slower on mobile but still challenging
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState, mode]);

  if (!isMounted) return <div className="w-full h-screen bg-brand-light" />;

  return (
    <main 
      className="relative w-full h-screen bg-brand-light text-brand-dark overflow-hidden flex flex-col items-center justify-center"
      onClick={mode === "game" ? jump : undefined}
    >
      {/* Background Noise/Grid */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-multiply" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(13,27,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(13,27,42,0.05)_1px,transparent_1px)] bg-[size:4vw_4vw] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

      <AnimatePresence mode="wait">
        {mode === "404" ? (
          <motion.div 
            key="404-view"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="w-full h-full flex flex-col items-center justify-center relative"
          >
            {/* Spotlight Effect */}
            <motion.div 
              className="absolute w-[40vw] h-[40vw] rounded-full bg-brand-olive mix-blend-multiply opacity-50 blur-[100px] pointer-events-none -ml-[20vw] -mt-[20vw]"
              style={{ left: smoothX, top: smoothY }}
            />

            {/* Main 404 Interactive Text */}
            <motion.div 
              style={{ rotateX, rotateY, perspective: 1000 }}
              className="relative z-10 flex items-center justify-center font-black uppercase tracking-tighter text-[25vw] leading-none select-none"
            >
              <motion.span 
                style={{ x: x1, y: y1 }}
                className="text-transparent text-stroke-2 text-stroke-brand-dark/20 inline-block drop-shadow-xl hover:text-brand-dark transition-colors duration-500 cursor-default"
              >
                4
              </motion.span>
              <motion.span 
                whileHover={{ scale: 0.8, rotate: 180 }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
                className="text-brand-olive inline-block z-20 drop-shadow-[0_0_40px_rgba(149,170,97,0.5)] cursor-pointer"
              >
                0
              </motion.span>
              <motion.span 
                style={{ x: x2, y: y2 }}
                className="text-transparent text-stroke-2 text-stroke-brand-dark/20 inline-block drop-shadow-xl hover:text-brand-dark transition-colors duration-500 cursor-default"
              >
                4
              </motion.span>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
              className="relative z-20 flex flex-col items-center mt-8 md:mt-0 gap-4"
            >
              <h1 className="text-xl md:text-3xl font-bold uppercase tracking-widest text-brand-dark mb-4 text-center px-4">
                Oups. Cette page n'était pas dans le brief.
              </h1>
              
              <div className="flex flex-col md:flex-row gap-4">
                <Link 
                  href="/" 
                  className="group relative px-8 py-4 bg-brand-dark text-brand-light rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-olive hover:text-brand-dark transition-colors duration-500 overflow-hidden flex items-center gap-4 hover-target"
                >
                  <div className="absolute inset-0 bg-brand-olive scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[0.76,0,0.24,1] z-0" />
                  <span className="relative z-10 flex items-center gap-4">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300" />
                    Retour à l'accueil
                  </span>
                </Link>

                <button 
                  onClick={() => setMode("game")}
                  className="group relative px-8 py-4 bg-transparent border-2 border-brand-dark text-brand-dark rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-dark hover:text-brand-light transition-colors duration-500 flex items-center justify-center gap-4 hover-target"
                >
                  <Gamepad2 className="w-5 h-5" />
                  Mini-Jeu
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="game-view"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="w-full h-full flex flex-col items-center relative overflow-hidden"
          >
            {/* Game UI Overlay */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50 flex flex-col gap-2">
              <button onClick={() => setMode("404")} className="text-brand-dark/50 hover:text-brand-dark font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Quitter
              </button>
              <h2 className="text-4xl font-black tracking-tighter uppercase mt-4">Score: {score}</h2>
              {highScore > 0 && <p className="text-brand-dark/50 font-bold uppercase tracking-widest text-sm">Meilleur: {highScore}</p>}
            </div>

            {/* The Game World */}
            <div className="relative w-full h-full max-w-6xl mx-auto flex items-end pb-[20vh]">
              {/* Floor Line */}
              <div className="absolute bottom-[20vh] left-0 w-full h-1 bg-brand-dark rounded-full opacity-20" />
              
              {/* Player (The '0' from 404) */}
              <div 
                ref={playerRef}
                className="absolute left-[10%] bottom-[20vh] w-12 h-12 md:w-16 md:h-16 bg-brand-olive rounded-full border-4 border-brand-dark z-20 flex items-center justify-center shadow-lg"
              >
                <span className="font-black text-brand-dark text-xl">0</span>
              </div>

              {/* Obstacle (The '4' from 404) */}
              <div 
                ref={obstacleRef}
                className="absolute bottom-[20vh] w-12 h-16 md:w-16 md:h-20 bg-brand-dark rounded-t-xl z-10 flex items-center justify-center overflow-hidden"
              >
                 <span className="font-black text-brand-light text-2xl">4</span>
              </div>
            </div>

            {/* Instructions / Game Over Screen */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
              {gameState === "start" && (
                <div className="bg-brand-light/90 backdrop-blur-md px-8 py-6 rounded-3xl border border-brand-dark/10 text-center animate-pulse">
                  <p className="font-black text-2xl md:text-4xl uppercase tracking-tighter">Appuyez sur ESPACE</p>
                  <p className="font-bold uppercase tracking-widest text-sm text-brand-dark/50 mt-2">ou cliquez pour sauter</p>
                </div>
              )}
              {gameState === "gameover" && (
                <div className="bg-brand-light/90 backdrop-blur-md px-12 py-8 rounded-3xl border border-brand-dark/10 text-center shadow-2xl pointer-events-auto">
                  <p className="font-black text-4xl md:text-6xl uppercase tracking-tighter text-brand-dark mb-2">Game Over</p>
                  <p className="font-bold uppercase tracking-widest text-brand-dark/50 mb-8">Score final : {score}</p>
                  <button 
                    onClick={jump}
                    className="mx-auto flex items-center gap-3 bg-brand-olive text-brand-dark px-8 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
                  >
                    <RotateCcw className="w-5 h-5" /> Rejouer
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .text-stroke-2 { -webkit-text-stroke-width: 2px; }
        .text-stroke-brand-dark\\/20 { -webkit-text-stroke-color: rgba(13, 27, 42, 0.2); }
      `}} />
    </main>
  );
}
