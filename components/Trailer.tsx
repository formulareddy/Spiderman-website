"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Trailer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const youtubeUrl = "https://www.youtube.com/embed/q4GdJVvdxss?si=_59jvQ2lzqkbWXC0";

  return (
    <section id="trailer" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-spider-red/5 via-transparent to-spider-blue/5" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spider-red/10 border border-spider-red/20 text-spider-red text-sm font-semibold tracking-wide">
            <Play size={14} fill="currentColor" />
            Official Trailer
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Experience the <span className="text-spider-red">Action</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            Watch the official trailer and get a glimpse of the stunning
            visuals and thrilling gameplay that awaits you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-spider-red via-transparent to-spider-blue rounded-3xl opacity-40 blur-sm" />
          <div className="absolute -inset-px bg-gradient-to-r from-spider-red/60 via-transparent to-spider-blue/60 rounded-3xl opacity-60" />

          <div className="relative aspect-video bg-dark-800 rounded-2xl overflow-hidden border border-white/10">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://img.youtube.com/vi/q4GdJVvdxss/maxresdefault.jpg')`,
                  }}
                />
                <div className="absolute inset-0 bg-dark-900/70 backdrop-blur-sm" />
                <motion.button
                  onClick={() => setIsPlaying(true)}
                  className="relative group w-24 h-24 rounded-full bg-spider-red flex items-center justify-center hover:bg-spider-red-dark transition-all duration-300 shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: "0 0 60px rgba(220, 38, 38, 0.5), 0 0 100px rgba(220, 38, 38, 0.3)",
                  }}
                >
                  <Play size={48} className="text-white ml-2" fill="white" />
                  <div className="absolute inset-0 rounded-full bg-spider-red animate-ping opacity-30" />
                </motion.button>
              </div>
            ) : (
              <iframe
                src={`${youtubeUrl}?autoplay=1&rel=0&modestbranding=1`}
                title="Spider-Man Miles Morales Trailer"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { label: "Resolution", value: "4K Ultra HD" },
            { label: "Frame Rate", value: "60 FPS" },
            { label: "Dynamic Range", value: "HDR" },
            { label: "Audio", value: "3D Spatial" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">{item.value}</p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
