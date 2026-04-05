"use client";

import { motion } from "framer-motion";
import { Zap, Eye, Ghost, Flame, Shield, Sparkles, ArrowUpRight } from "lucide-react";

const abilities = [
  {
    icon: Zap,
    title: "Venom Powers",
    description:
      "Channel bio-electric venom blasts that can incapacitate enemies and destroy obstacles with devastating effect.",
    color: "#DC2626",
    stats: "Power: 95",
  },
  {
    icon: Ghost,
    title: "Camouflage",
    description:
      "Become invisible to enemies with Miles' unique camouflage ability, perfect for stealth approaches.",
    color: "#8B5CF6",
    stats: "Stealth: 90",
  },
  {
    icon: Flame,
    title: "Venom Smash",
    description:
      "Unleash devastating melee attacks infused with venom energy that can take down powerful foes.",
    color: "#F59E0B",
    stats: "Damage: 88",
  },
  {
    icon: Eye,
    title: "Spider-Sense",
    description:
      "Enhanced precognitive abilities allow Miles to sense danger before it happens.",
    color: "#2563EB",
    stats: "Awareness: 100",
  },
  {
    icon: Shield,
    title: "Wall Crawling",
    description:
      "Scale any surface with ease, sticking to walls and ceilings to navigate the urban jungle.",
    color: "#10B981",
    stats: "Agility: 92",
  },
  {
    icon: Sparkles,
    title: "Metro Jump",
    description:
      "Swing through the city with style using Miles' unique rhythmic movement and acrobatic moves.",
    color: "#EC4899",
    stats: "Style: 95",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Abilities() {
  return (
    <section id="abilities" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spider-red/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spider-blue/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spider-blue/10 border border-spider-blue/20 text-spider-blue text-sm font-semibold tracking-wide">
            <Zap size={14} />
            Unique Abilities
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Powers & <span className="text-spider-red">Abilities</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            Miles possesses unique powers that set him apart from other Spider-Men.
            Master these abilities to become the ultimate hero.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {abilities.map((ability) => (
            <AbilityCard key={ability.title} ability={ability} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AbilityCard({ ability }: { ability: typeof abilities[0] }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-spider-red via-spider-blue to-spider-red rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />
      
      <div className="relative h-full rounded-2xl p-8 bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"
          style={{ backgroundColor: ability.color }}
        />

        <div className="relative">
          <div className="flex items-start justify-between mb-6">
            <motion.div
              className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
              style={{ backgroundColor: `${ability.color}15` }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ability.icon size={32} style={{ color: ability.color }} />
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500"
                style={{ backgroundColor: ability.color }}
              />
            </motion.div>

            <motion.div
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {ability.stats}
            </motion.div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
            {ability.title}
          </h3>

          <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
            {ability.description}
          </p>

          <motion.div
            className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0"
            style={{ color: ability.color }}
          >
            <span>Learn more</span>
            <ArrowUpRight size={16} />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{ color: ability.color }}
        />
      </div>
    </motion.div>
  );
}
