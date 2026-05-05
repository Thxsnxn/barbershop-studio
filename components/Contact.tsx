"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import { Phone, MessageCircle, MapPin, Clock, Share2 } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "โทรศัพท์",
    value: "061-418-7946",
    href: "tel:+66614187946",
  },
  {
    icon: MessageCircle,
    label: "LINE",
    value: "@778kpgjf",
    href: "https://line.me/R/ti/p/@778kpgjf",
  },
  {
    icon: Share2,
    label: "Facebook",
    value: "buddy Cool Barber Shop",
    href: "https://web.facebook.com/ByTaeBarber",
  },
  {
    icon: MapPin,
    label: "ที่อยู่",
    value: "พหลโยธิน 53 แยก 16 บางเขน กทม",
    href: "https://maps.app.goo.gl/JR9Fh1ufw5fufvr7A",
  },
  {
    icon: Clock,
    label: "เวลาทำการ",
    value: "ทุกวัน: 11:00 – 22:00 น.",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-beige-50">
      <div className="max-w-6xl mx-auto px-6">
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
            มาคุยกันเลย
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
          >
            จองคิวกับเรา
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                variants={i % 2 === 0 ? slideInLeft : slideInRight}
                className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:shadow-gray-900/5 transition-shadow duration-300"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-beige-50 border border-gray-100 flex items-center justify-center text-gray-700">
                  <item.icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-medium text-gray-900">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col justify-center"
          >
            <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                อยากเปลี่ยนลุคป่าว?
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Walk-in ได้เลยนะ แต่จองล่วงหน้าจะดีกว่า
                จองผ่าน LINE หรือโทรมาตรงก็ได้
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+66614187946"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-white text-gray-900 px-6 py-3.5 rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-[1.04] active:scale-[0.96]"
                >
                  <Phone size={16} strokeWidth={2} />
                  โทรเลย
                </a>
                <a
                  href="https://line.me/R/ti/p/@778kpgjf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-transparent text-white border border-white/20 px-6 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200 hover:scale-[1.04] active:scale-[0.96]"
                >
                  <MessageCircle size={16} strokeWidth={2} />
                  จองผ่าน LINE
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}