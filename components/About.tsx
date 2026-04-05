"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const stats = [
  { value: "2018", label: "First Appearance" },
  { value: "Brooklyn", label: "Home City" },
  { value: "Venom", label: "Power Source" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const smoothImageY = useSpring(imageY, { stiffness: 100, damping: 30 });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-spider-red/5 rounded-full blur-3xl"
        style={{ y: smoothImageY }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-80 h-80 bg-spider-blue/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-spider-red/10 via-transparent to-spider-blue/10 rounded-3xl blur-2xl" />
              
              <motion.div
                className="relative aspect-[3/4] rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/images/spaidwr menjiss2.jpg"
                  alt="Miles Morales"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-spider-red/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-4 md:-right-8 glass-strong rounded-2xl p-6 border border-white/10"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-spider-red to-spider-red-dark flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <SpiderIcon />
                  </motion.div>
                  <div>
                    <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Latest Game</p>
                    <p className="text-lg font-bold text-white">Miles Morales</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="order-1 lg:order-2"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spider-red/10 border border-spider-red/20 text-spider-red text-sm font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 bg-spider-red rounded-full" />
                The Story
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
            >
              A New Hero
              <br />
              <span className="bg-gradient-to-r from-spider-blue to-blue-400 bg-clip-text text-transparent">
                Rises
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-lg md:text-xl text-zinc-400 leading-relaxed"
            >
              Miles Morales is a new hero, forced to take the mantle of
              <span className="text-white font-medium"> Spider-Man </span>
              after the presumed death of Peter Parker. But with a mysterious
              symmetrically powerful threat looming, Miles must master his
              unique abilities to protect New York City.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base text-zinc-500 leading-relaxed"
            >
              Gifted with incredible powers, Miles can blend into shadows,
              unleash devastating venom attacks, and tap into hidden
              spider-senses. His journey is one of growth, responsibility,
              and finding his own way to be a hero.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                  whileHover={{ y: -4 }}
                >
                  <p className="text-2xl md:text-3xl font-black text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SpiderIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
