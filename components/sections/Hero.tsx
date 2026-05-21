"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/hero-image-001-260521.png",
  "/images/hero-image-002-260522.jpg",
  "/images/hero-image-003-260522.jpg",
  "/images/hero-image-004-260522.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-[60vw] md:h-[100vh] overflow-hidden mt-18 scroll-mt-18">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={images[index]}
            alt="Hero Image"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}