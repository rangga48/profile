"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "@/config/projects";

const ProjectDetailGallery = ({ project }: { project: Project }) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  if (!project.galleryImages || project.galleryImages.length === 0) return null;

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="font-display font-bold text-3xl text-zinc-900 dark:text-white mb-10 text-center"
          data-aos="fade-up"
        >
          Project Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md cursor-pointer group"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full max-h-[85vh] aspect-video rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative SVG Path Drawing Border */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 0,0 L 100,0 L 100,100 L 0,100 Z"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, type: "tween" }}
                />
              </svg>

              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain p-4"
                priority
              />

              {/* Title / Alt text indicator */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl text-white text-sm z-20 flex justify-between items-center">
                <span className="font-medium truncate mr-4">{selectedImage.alt}</span>
                <span className="text-zinc-400 text-xs hidden md:inline flex-shrink-0">Click outside to close</span>
              </div>

              {/* Close Button with animated SVG path */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-30 p-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-colors duration-200 focus:outline-none"
                aria-label="Close modal"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    d="M18 6L6 18M6 6l12 12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, type: "tween" }}
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectDetailGallery;
