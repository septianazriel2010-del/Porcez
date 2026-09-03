"use client";

import { useRef, type ElementType, type ReactNode } from "react";

const GLITCH_CHARS = "01ABCDEF#$%&*<>[]{}/\\".split("");

export default function GlitchText({
  text,
  as: Tag = "span",
  className = "",
  children,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    if (intervalRef.current) clearInterval(intervalRef.current);

    let frame = 0;
    const totalFrames = 10;
    intervalRef.current = setInterval(() => {
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          out += " ";
          continue;
        }
        const revealPoint = (i / text.length) * totalFrames;
        out += frame > revealPoint + 3 ? text[i] : GLITCH_CHARS[(Math.random() * GLITCH_CHARS.length) | 0];
      }
      el.textContent = out;
      frame++;
      if (frame > totalFrames + 4) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        el.textContent = text;
      }
    }, 34);
  };

  return (
    <Tag
      ref={ref}
      className={`glitch-text ${className}`}
      onMouseEnter={scramble}
    >
      {children ?? text}
    </Tag>
  );
}
