"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  viewportOnce,
} from "@/lib/animations";

const images = [
  { src: "/mycafe1.jpg", alt: "บรรยากาศร้าน buddy Cool Barber Shop" },
  { src: "/mycafe2.jpg", alt: "มุมตัดผมในร้าน buddy Cool" },
  { src: "/mycafe3.jpg", alt: "โซนบริการร้านตัดผม buddy Cool" },
  { src: "/mycafe4.jpg", alt: "ผลงานตัดผมจากร้าน buddy Cool" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop&q=80", alt: "ตัวอย่างทรงผมคลาสสิก" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop&q=80", alt: "ทรงผม Fade สไตล์" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop&q=80", alt: "การดูแลหนวด" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop&q=80", alt: "การจัดแต่งทรงผม" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=600&fit=crop&q=80", alt: "ตัดผมแม่นยำ" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-beige-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            variants={fadeInUp}
            className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block"
          >
            ผลงานเรา
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
          >
            ผลงาน
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              variants={scaleIn}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}