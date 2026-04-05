"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Twitter, Instagram, Heart } from "lucide-react";

const socialLinks = [
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/reddaiah-dasuru-689923400/",
    color: "hover:text-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
  },
  { 
    name: "Twitter", 
    icon: Twitter, 
    href: "https://x.com/Reddydasuri",
    color: "hover:text-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/hitanimes55",
    color: "hover:text-pink-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
  },
];

const footerLinks = {
  Explore: ["About", "Abilities", "Gallery", "Trailer"],
  Game: ["PlayStation Store", "Reviews", "Awards", "DLC"],
  Support: ["Help Center", "Contact", "FAQ", "Community"],
};

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-900/50" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-spider-red/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <SpiderLogo />
              </motion.div>
              <span className="text-xl font-bold tracking-tight">
                Hitanimes<span className="text-spider-red">55</span>
              </span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              A premium Spider-Man experience. Built with passion for the web and love for the web-slinger.
            </p>
            
            <div className="space-y-3">
              <a 
                href="mailto:hitanimes55@gmail.com"
                className="flex items-center gap-3 text-sm text-zinc-500 hover:text-white transition-colors group"
              >
                <Mail size={16} className="text-spider-red" />
                <span className="group-hover:underline">hitanimes55@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <MapPin size={16} className="text-spider-blue" />
                <span>Kadapa, Andhra Pradesh</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full glass flex items-center justify-center text-zinc-500 transition-all duration-300 ${social.color}`}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-white transition-colors inline-block hover:translate-x-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600 text-center md:text-left">
              © 2024 Hitanimes55. All rights reserved. Spider-Man is a trademark of Marvel Comics.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <span>Built with</span>
              <Heart size={14} className="text-spider-red fill-spider-red" />
              <span>using Next.js, Tailwind & Framer Motion</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function SpiderLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-spider-red">
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="2" x2="16" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="22" x2="16" y2="30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="2" y1="16" x2="10" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="5.86" y1="5.86" x2="11.43" y2="11.43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="20.57" y1="20.57" x2="26.14" y2="26.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="26.14" y1="5.86" x2="20.57" y2="11.43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="11.43" y1="20.57" x2="5.86" y2="26.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
