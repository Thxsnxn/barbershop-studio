"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { Shield, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "สะอาด ปลอดภัย",
    desc: "อุปกรณ์ฆ่าเชื้อทุกครั้ง ผ้าคลุมใหม่เสมอ ร้านสะอาดตลอด",
  },
  {
    icon: Award,
    title: "ช่างมือเก๋า",
    desc: "ตัดมานานหลายปี เชี่ยวชาญทุกทรงผม อัพเดทเทรนด์ใหม่ตลอด",
  },
  {
    icon: Heart,
    title: "ใส่ใจลูกค้า",
    desc: "บอกได้เลยอยากได้แบบไหน เราจัดให้ ไม่พอใจตัดใหม่ให้",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100"
          >
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=1000&fit=crop&q=80"
              alt="Barber at work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span
              variants={fadeInUp}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block"
            >
              เรื่องของเรา
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6"
            >
              ตัดให้เนี๊ยบ ใส่ใจทุกรายละเอียด
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 leading-relaxed mb-10 text-base md:text-lg"
            >
              buddy Cool Barber Shop ไม่ใช่แค่ร้านตัดผมธรรมดา
              เราตัดด้วยใจ ใส่ใจทุกรายละเอียด ทุกทรงผมเราตัดให้เหมาะกับรูปหน้าและสไตล์ของคุณ
              เข้ามาธรรมดา ออกไปหล่อแน่นอน ไม่งั้นไม่เก็บตังนะ!
            </motion.p>

            <motion.div variants={staggerContainer} className="space-y-6">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={slideInRight}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-beige-50 border border-gray-100 flex items-center justify-center text-gray-700">
                    <value.icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}