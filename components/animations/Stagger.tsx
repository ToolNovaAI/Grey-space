"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import {
  staggerContainer,
  viewport,
} from "@/lib/animations";

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export default function Stagger({
  children,
  className = "",
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}
