"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImagesScreen({ onNext }) {
  const images = [
    {
      src: "/images/img1.png",
      alt: "First memory of you",
    },
    {
      src: "/images/img2.jpg",
      alt: "Second memory of you",
    },
    {
      src: "/images/img3.png",
      alt: "Third memory of you",
    },
  ];

  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-8 px-4 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground drop-shadow-[0_0_10px_rgba(0,0,0,0.4)]"
      >
        Some of my favourite pictures of you 💁‍♂️
      </motion.h2>

      {/* 3 equal images */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-xl bg-black/60"
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </motion.div>

      {/* Small line of text + button to go to final screen */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center gap-3"
      >
        <p className="text-base md:text-lg text-foreground/80">
          Every picture is a small reason why you’re special to me.😍 🥹
        </p>

        <button
          onClick={onNext}
          className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-sm md:text-base text-foreground backdrop-blur-sm transition"
        >
          Tap to see the last message ➜
        </button>
      </motion.div>
    </div>
  );
}
