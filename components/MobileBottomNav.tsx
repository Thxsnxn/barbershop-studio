"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Scissors, Image, Phone } from "lucide-react";

const navItems = [
    { icon: Home, label: "หน้าแรก", href: "#" },
    { icon: Scissors, label: "บริการ", href: "#services" },
    { icon: Image, label: "ผลงาน", href: "#gallery" },
    { icon: Phone, label: "ติดต่อ", href: "#contact" },
];

export default function MobileBottomNav() {
    const [activeSection, setActiveSection] = useState("#");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["#", "#services", "#gallery", "#about", "#contact"];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section === "#") {
                    if (window.scrollY < 100) {
                        setActiveSection("#");
                        return;
                    }
                } else {
                    const element = document.querySelector(section);
                    if (element) {
                        const offsetTop = (element as HTMLElement).offsetTop;
                        if (scrollPosition >= offsetTop) {
                            setActiveSection(section);
                            return;
                        }
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (href: string) => {
        setActiveSection(href);
        if (href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="md:hidden mobile-bottom-nav z-50 bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-lg"
            style={{ touchAction: "manipulation" }}
        >
            <div className="flex items-center justify-around px-2 py-3">
                {navItems.map((item) => {
                    const isActive = activeSection === item.href;
                    return (
                        <button
                            key={item.href}
                            onClick={() => handleClick(item.href)}
                            className="flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 active:scale-95"
                        >
                            <motion.div
                                animate={{
                                    scale: isActive ? 1.1 : 1,
                                    y: isActive ? -2 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                                className={`relative ${isActive ? "text-gray-900" : "text-gray-400"
                                    }`}
                            >
                                <item.icon size={22} strokeWidth={isActive ? 2 : 1.5} />
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-900"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                            <span
                                className={`text-[10px] font-medium transition-colors ${isActive ? "text-gray-900" : "text-gray-400"
                                    }`}
                            >
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </motion.nav>
    );
}
