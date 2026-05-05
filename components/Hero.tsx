"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { MessageCircle, Clock, ChevronRight, MapPin, Navigation } from "lucide-react";

const LINE_URL = "https://line.me/R/ti/p/@778kpgjf";
const MAP_URL = "https://maps.app.goo.gl/JR9Fh1ufw5fufvr7A";

const headlineWords = ["ตัดให้.", "เนี๊ยบ.", "สไตล์.", "ชัด."];

function LineIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.271.173-.508.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

export default function Hero() {
  const [showSub, setShowSub] = useState(false);
  const [showMobileLine, setShowMobileLine] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowSub(true), 1200);
    const t2 = setTimeout(() => setShowMobileLine(true), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Desktop layout: two columns */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center lg:gap-12 xl:gap-20">

        {/* Left: Headline + CTA */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center lg:justify-start gap-x-3 md:gap-x-4 gap-y-1 mb-8"
          >
            {headlineWords.map((word, i) => (
              <motion.h1
                key={word}
                variants={fadeInUp}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900"
              >
                {word}
              </motion.h1>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={showSub ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            ตัดผมชาย สไตล์ชัด ดูดีทุกมุม
            <br />
            เข้ามาปกติ ออกไปหล่อแน่นอน
          </motion.p>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-[1.04] active:scale-[0.96] shadow-lg shadow-gray-900/10"
            >
              จองคิว
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right: LINE Contact Card — Desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block flex-shrink-0 w-[340px] xl:w-[380px]"
        >
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-green-400/20 via-green-500/10 to-transparent rounded-[2rem] blur-2xl" />

            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/[0.08] overflow-hidden">
              {/* Card header with LINE green */}
              <div className="bg-gradient-to-r from-[#06C755] to-[#04B44C] px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <LineIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">แชทกับเราผ่าน LINE</p>
                    <p className="text-white/70 text-xs">ตอบไวภายใน 5 นาที</p>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 space-y-4">
                {/* Chat bubble simulation */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06C755] to-[#04B44C] flex items-center justify-center flex-shrink-0">
                    <LineIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-50 rounded-2xl rounded-tl-md px-4 py-3 max-w-[220px]">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      สวัสดีค่ะ! 👋 นัดคิวตัดผมแจ้งเวลาได้เลยนะคะ
                    </p>
                  </div>
                </div>

                {/* Info pills */}
                <div className="flex flex-wrap gap-2 pl-11">
                  <span className="inline-flex items-center gap-1.5 text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full border border-green-100">
                    <Clock size={12} />
                    เปิดทุกวัน 11:00–22:00
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-gray-50 text-gray-600 px-3 py-1.5 rounded-full border border-gray-100">
                    @778kpgjf
                  </span>
                </div>

                {/* CTA Button */}
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full bg-[#06C755] hover:bg-[#05B34D] text-white font-semibold text-sm py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-500/20"
                >
                  <LineIcon className="w-5 h-5" />
                  เพิ่มเพื่อนและจองคิว
                  <ChevronRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>

                {/* Map Preview Box */}
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="relative w-full h-[100px] bg-gray-100 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.5!2d100.6144!3d13.8403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDUwJzI1LjEiTiAxMDDCsDM2JzUxLjgiRQ!5e0!3m2!1sth!2sth!4v1"
                      className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Buddu Cool Barber Shop Location"
                    />
                    {/* Clickable overlay */}
                    <div className="absolute inset-0 bg-transparent z-10" />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-white">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <MapPin size={14} className="text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900 truncate">พหลโยธิน 53 แยก 16 บางเขน</p>
                      <p className="text-[10px] text-gray-400">กดเพื่อเปิดแผนที่</p>
                    </div>
                    <Navigation size={14} className="text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                  </div>
                </a>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.4, type: "spring", stiffness: 300 }}
              className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
            >
              จองเลย!
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile: Floating buttons — bottom right */}
      <AnimatePresence>
        {showMobileLine && (
          <>
            {/* Map button */}
            <motion.a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              className="lg:hidden fixed bottom-[10.5rem] right-5 z-50 w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/30 transition-colors duration-200 active:scale-90"
              aria-label="ดูแผนที่ร้าน"
            >
              <MapPin className="w-7 h-7 text-white" />
            </motion.a>

            {/* LINE button */}
            <motion.a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="lg:hidden fixed bottom-24 right-5 z-50 w-14 h-14 bg-[#06C755] hover:bg-[#05B34D] rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-colors duration-200 active:scale-90"
              aria-label="ติดต่อผ่าน LINE"
            >
              <LineIcon className="w-7 h-7 text-white" />
              {/* Ping animation */}
              <span className="absolute inset-0 rounded-full bg-[#06C755] animate-ping opacity-30" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Scroll Indicator - positioned relative to section, outside content div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-gray-300 flex justify-center pt-1.5"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}