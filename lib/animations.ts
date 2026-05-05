import { Variants } from "framer-motion";

// ─── Base Transition ─────────────────────────
export const baseTransition = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
};

// ─── Fade In Up ──────────────────────────────
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: baseTransition,
  },
};

// ─── Fade In ─────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Slide In Left ───────────────────────────
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

// ─── Slide In Right ──────────────────────────
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: baseTransition,
  },
};

// ─── Scale In ────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Stagger Container ───────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// ─── Stagger Fast ────────────────────────────
export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// ─── Viewport Settings ───────────────────────
export const viewportOnce = {
  once: true,
  margin: "-80px",
  amount: 0.2,
};