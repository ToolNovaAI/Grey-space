"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import {
  fadeIn,
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
  scaleUp,
  viewport,
} from "@/lib/animations";

type AnimationType =
  | "fade"
  | "up"
  | "down"
  | "left"
  | "right"
  | "scale";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: AnimationType;
}

const variantsMap = {
  fade: fadeIn,
  up: slideUp,
  down: slideDown,
  left: slideLeft,
  right: slideRight,
  scale: scaleUp,
} as const;

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration,
  animation = "up",
}: FadeInProps) {
  const selectedVariant = variantsMap[animation];

  return (
    <motion.div
      className={className}
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{
        delay,
        ...(duration !== undefined
          ? { duration }
          : {}),
      }}
    >
      {children}
    </motion.div>
  );
}
