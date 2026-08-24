"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import {
  slideUp,
  viewport,
} from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        ...viewport,
        once,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
