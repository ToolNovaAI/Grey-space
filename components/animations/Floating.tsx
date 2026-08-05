"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { floatingAnimation } from "@/lib/animations";

interface FloatingProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  distance?: number;
}

export default function Floating({
  children,
  className = "",
  duration = 4,
  delay = 0,
  distance = 12,
}: FloatingProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -distance, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
