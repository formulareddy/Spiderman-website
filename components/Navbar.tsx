"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Abilities", href: "#abilities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Trailer", href: "#trailer" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.85)"]
  );
  const headerBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);
  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.08)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          style={{
            backgroundColor: headerBg,
            backdropFilter: headerBlur,
            borderBottomColor: headerBorder,
          }}
          className="border-b transition-colors duration-500"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <motion.a
                href="#"
                className="flex items-center gap-3 group"
                whileHover={{ opacity: 0.8 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <SpiderLogo />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-bold tracking-tight leading-none">
                    MILES<span className="text-spider-red">MORALES</span>
                  </span>
                </div>
              </motion.a>

              <nav className="hidden md:flex items-center gap-10">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 py-2 group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -1 }}
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-spider-red transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ))}
              </nav>

              <motion.button
                onClick={() => handleNavClick("#cta")}
                className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-white text-dark-900 text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Play Now
              </motion.button>

              <motion.button
                className="md:hidden p-2 -mr-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                whileTap={{ scale: 0.95 }}
              >
                <Menu size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-dark-900/95 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-dark-800/50 backdrop-blur-xl border-l border-white/5"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-white/5">
                  <span className="text-lg font-bold">Menu</span>
                  <motion.button
                    className="p-2 -mr-2 text-white/60 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                        className="flex items-center py-4 text-2xl font-semibold text-white/80 hover:text-white transition-colors border-b border-white/5"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </nav>

                <div className="p-6 border-t border-white/5">
                  <motion.button
                    onClick={() => handleNavClick("#cta")}
                    className="w-full py-4 bg-white text-dark-900 font-semibold rounded-full"
                    whileTap={{ scale: 0.98 }}
                  >
                    Play Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SpiderLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-spider-red">
      <circle cx="18" cy="18" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="18" y1="3" x2="18" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="25" x2="18" y2="33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="18" x2="11" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="25" y1="18" x2="33" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="7.1" y1="7.1" x2="12.7" y2="12.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="23.3" y1="23.3" x2="28.9" y2="28.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="28.9" y1="7.1" x2="23.3" y2="12.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12.7" y1="23.3" x2="7.1" y2="28.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
