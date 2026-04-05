"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid, Maximize2 } from "lucide-react";

const images = [
  {
    src: "/images/spaidwr menjiss2.jpg",
    title: "Spider-Man",
    category: "Character",
    aspect: "landscape",
  },
  {
    src: "/images/Across the Spider-Verse's Gwen Stacy Recreated in 3D.jpg",
    title: "Gwen Stacy",
    category: "Character",
    aspect: "portrait",
  },
  {
    src: "/images/download (15).jpg",
    title: "Spider Action",
    category: "Gameplay",
    aspect: "landscape",
  },
  {
    src: "/images/download (16).jpg",
    title: "Hero Pose",
    category: "Character",
    aspect: "square",
  },
  {
    src: "/images/download (17).jpg",
    title: "Spider Hero",
    category: "Action",
    aspect: "landscape",
  },
  {
    src: "/images/Hang Man on Instagram.jpg",
    title: "Web Slinger",
    category: "Action",
    aspect: "portrait",
  },
  {
    src: "/images/Spider-Man.jpg",
    title: "Spider-Man Ultimate",
    category: "Character",
    aspect: "landscape",
  },
];

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.9, y: 40 },
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  }, []);

  const navigate = useCallback(
    (direction: "prev" | "next") => {
      if (selectedImage === null) return;
      if (direction === "prev") {
        setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
      } else {
        setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
      }
    },
    [selectedImage]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, closeLightbox, navigate]);

  const getAspectClass = (aspect: string) => {
    switch (aspect) {
      case "portrait":
        return "aspect-[3/4]";
      case "square":
        return "aspect-square";
      default:
        return "aspect-[4/3]";
    }
  };

  return (
    <section id="gallery" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-spider-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-spider-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-spider-yellow/10 border border-spider-yellow/20 text-spider-yellow text-sm font-semibold tracking-wide">
            <Grid size={14} />
            Media Gallery
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Stunning <span className="text-spider-blue">Visuals</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            Explore the breathtaking world of Spider-Man Miles Morales through
            our curated gallery of screenshots and artwork.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => openLightbox(index)}
            >
              <div className={`relative ${getAspectClass(image.aspect)} rounded-2xl overflow-hidden`}>
                <motion.img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    opacity: isHovered === index ? 1 : 0,
                  }}
                />

                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                  animate={{
                    opacity: isHovered === index ? 1 : 0,
                    y: isHovered === index ? 0 : 16,
                  }}
                >
                  <span className="text-xs font-semibold text-spider-red uppercase tracking-widest mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{image.title}</h3>
                </motion.div>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    opacity: isHovered === index ? 1 : 0,
                  }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full glass-strong flex items-center justify-center border border-white/20"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: isHovered === index ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <ZoomIn size={24} className="text-white" />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    opacity: isHovered === index ? 1 : 0,
                  }}
                >
                  <div className="w-10 h-10 rounded-full glass-strong flex items-center justify-center">
                    <Maximize2 size={16} className="text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-6xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute -top-12 right-0 p-3 text-white/60 hover:text-white transition-colors"
                onClick={closeLightbox}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={28} />
              </motion.button>

              <div className="relative rounded-2xl overflow-hidden bg-dark-800">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={images[selectedImage].src}
                    alt={images[selectedImage].title}
                    className="w-full max-h-[75vh] object-contain"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
                <motion.button
                  className="pointer-events-auto p-4 rounded-full glass-strong text-white hover:bg-white/10 transition-all -translate-x-4 md:translate-x-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("prev");
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={32} />
                </motion.button>
                <motion.button
                  className="pointer-events-auto p-4 rounded-full glass-strong text-white hover:bg-white/10 transition-all translate-x-4 md:translate-x-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("next");
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={32} />
                </motion.button>
              </div>

              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm text-zinc-500 mb-2">
                  {selectedImage + 1} / {images.length}
                </p>
                <h3 className="text-2xl font-bold text-white">
                  {images[selectedImage].title}
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  {images[selectedImage].category}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
