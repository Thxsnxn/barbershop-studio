"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { Scissors, Droplets, Sparkles, Scissors as ShaveIcon, Wind, Waves, Zap, Brush, Palette } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "ตัดผม",
    price: "250฿",
    desc: "ตัดผมทรงคลาสสิกหรือทันสมัย เหมาะกับรูปหน้าและสไตล์ของคุณ",
  },
  {
    icon: Droplets,
    title: "สระ",
    price: "60฿",
    desc: "สระผมสะอาด ผ่อนคลาย ด้วยผลิตภัณฑ์คุณภาพ",
  },
  {
    icon: Sparkles,
    title: "ตัดสระผม",
    price: "300฿",
    desc: "แพ็คเกจคุ้มค่า ตัดผม + สระในที่เดียว",
  },
  {
    icon: ShaveIcon,
    title: "โกนหนวด (Shave)",
    price: "50-100฿",
    desc: "โกนหนวดเนียนเรียบ เล็มขอบให้ดูคมชัด",
  },
  {
    icon: Wind,
    title: "ดัดวอลลุ่ม",
    price: "1,500฿",
    desc: "Perm the Volume เพิ่มวอลลุ่มให้ผมดูฟูนุ่มนวล",
  },
  {
    icon: Waves,
    title: "ดัดฟอย",
    price: "1,500฿",
    desc: "Foil Bending เทคนิคดัดแบบฟอยล์ ลอนสวยเป็นธรรมชาติ",
  },
  {
    icon: Zap,
    title: "ยืดวอลลุ่ม",
    price: "1,500฿",
    desc: "Straighten Volume ยืดผมให้ตรงสนิท ดูเรียบเป็นระเบียบ",
  },
  {
    icon: Brush,
    title: "Up Perm / Down Perm",
    price: "1,200฿",
    desc: "ดัดผมแบบพิเศษ สำหรับลุคที่โดดเด่นกว่าใคร",
  },
  {
    icon: Palette,
    title: "ทำสี (Hair Color)",
    price: "500-2,500฿",
    desc: "ย้อมสีผมตามสไตล์ที่ต้องการ (ฟอกรอบละ 500฿)",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
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
            บริการที่เรามี
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
          >
            เมนูบริการ
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={i % 2 === 0 ? slideInLeft : slideInRight}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-beige-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-gray-900/5 transition-shadow duration-300"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-gray-100 text-gray-900 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={22} strokeWidth={1.5} />
              </div>
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <span className="text-lg font-bold text-gray-900">
                  {service.price}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}