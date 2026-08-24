"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorEffect() {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 280,
    damping: 24,
    mass: 0.35,
  });

  const springY = useSpring(mouseY, {
    stiffness: 280,
    damping: 24,
    mass: 0.35,
  });

  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);

  const targetSpringX = useSpring(targetX, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  const targetSpringY = useSpring(targetY, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateEnabled = () => {
      setEnabled(mediaQuery.matches && !reducedMotion.matches);
    };

    updateEnabled();

    mediaQuery.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        mouseX.set(clientX);
        mouseY.set(clientY);

        targetX.set(clientX);
        targetY.set(clientY);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled, mouseX, mouseY, targetX, targetY]);

  useEffect(() => {
    if (!enabled) return;

    const handlePointerOver = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      document.documentElement.dataset.cursorHover = interactive
        ? "true"
        : "false";
    };

    window.addEventListener("mouseover", handlePointerOver);

    return () => {
      window.removeEventListener("mouseover", handlePointerOver);
      delete document.documentElement.dataset.cursorHover;
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      {/* Main Cursor Glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.8)] lg:block"
        style={{
          x: springX,
          y: springY,
        }}
      />

      {/* Soft Outer Glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.04] blur-[1px] lg:block"
        style={{
          x: targetSpringX,
          y: targetSpringY,
        }}
      />

      {/* Ambient Blur */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9997] hidden h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-violet-500/10 blur-2xl lg:block"
        style={{
          x: targetSpringX,
          y: targetSpringY,
        }}
      />
    </>
  );
}
