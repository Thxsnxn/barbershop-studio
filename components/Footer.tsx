"use client";

import { motion } from "framer-motion";
import { fadeIn, viewportOnce } from "@/lib/animations";

export default function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="py-12 bg-white border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} buddy Cool Barber Shop. สงวนลิขสิทธิ์.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#services"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            บริการ
          </a>
          <a
            href="#gallery"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            ผลงาน
          </a>
          <a
            href="https://web.facebook.com/ByTaeBarber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://line.me/R/ti/p/@778kpgjf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            LINE
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            ติดต่อ
          </a>
        </div>
      </div>
    </motion.footer>
  );
}