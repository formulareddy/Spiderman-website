"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ChevronDown, Play, Zap } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScrollY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const backgroundY = useTransform(smoothScrollY, [0, 1], [0, 150]);
  const textY = useTransform(smoothScrollY, [0, 1], [0, 100]);
  const opacity = useTransform(smoothScrollY, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothScrollY, [0, 1], [1, 1.1]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = containerRef.current?.getBoundingClientRect() || { width: 0, height: 0, left: 0, top: 0 };
    
    const x = (clientX - left - width / 2) / width;
    const y = (clientY - top - height / 2) / height;
    
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWatchTrailer = () => {
    document.querySelector("#trailer")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePlayNow = () => {
    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
  };

  const taglines = [
    "Embrace the power. Face the challenge.",
    "Your story begins now.",
    "Become Spider-Man.",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: `url('/images/spaidwr menjiss2.jpg')`,
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900" />
        
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 30%, rgba(220, 38, 38, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 70% 70%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle 600px at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, transparent 0%, rgba(10, 10, 10, 0.4) 50%)`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-spider-red rounded-full"
          animate={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
          style={{ boxShadow: "0 0 20px 5px rgba(220, 38, 38, 0.5)" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-spider-blue rounded-full"
          animate={{
            x: -mousePosition.x * 20,
            y: -mousePosition.y * 20,
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
          style={{ boxShadow: "0 0 15px 3px rgba(37, 99, 235, 0.4)" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full"
          animate={{
            x: mousePosition.x * 25,
            y: mousePosition.y * 25,
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          style={{ boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.3)" }}
        />
      </div>

      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
            <motion.span
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span className="text-sm font-medium text-zinc-300 tracking-wide uppercase">
              PlayStation 5 Exclusive
            </span>
          </span>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute -inset-20 opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x * 5}% ${50 + mousePosition.y * 5}%, rgba(220, 38, 38, 0.4) 0%, transparent 50%)`,
            }}
          />
          
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-black tracking-tighter leading-[0.85]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="block text-white drop-shadow-2xl">
              SPIDER
            </span>
            <span
              className="block bg-gradient-to-r from-spider-red via-white to-spider-blue bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% auto",
              }}
            >
              MAN
            </span>
          </motion.h1>

          <motion.div
            className="absolute -bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="text-lg md:text-xl lg:text-2xl font-light text-zinc-400 tracking-wide">
              Miles Morales
            </span>
          </motion.div>
        </div>

        <motion.div
          className="h-16 mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base md:text-lg lg:text-xl text-zinc-400 font-light tracking-wide"
            >
              {taglines[currentTagline]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={handlePlayNow}
            className="group relative px-10 py-4.5 bg-white text-dark-900 font-semibold rounded-full text-base overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Zap size={18} className="text-spider-red" />
              <span>Play Now</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>

          <motion.button
            onClick={handleWatchTrailer}
            className="group flex items-center gap-3 px-8 py-4.5 text-white font-medium rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
              <Play size={14} fill="currentColor" className="ml-0.5" />
            </span>
            <span>Watch Trailer</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={handleScrollDown}
            className="group flex flex-col items-center gap-3 text-white/40 hover:text-white/70 transition-colors"
            whileHover={{ y: 4 }}
          >
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">
              Explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown size={22} strokeWidth={1.5} />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      />

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ transformOrigin: "top" }}
      />
    </section>
  );
}
