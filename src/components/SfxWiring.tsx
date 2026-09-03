"use client";

import { useEffect } from "react";
import { playHover, playClick, unlockSound } from "@/lib/sound";

export default function SfxWiring() {
  useEffect(() => {
    const unlock = () => unlockSound();
    window.addEventListener("pointerdown", unlock, { passive: true });
    window.addEventListener("keydown", unlock, { passive: true });
    window.addEventListener("touchstart", unlock, { passive: true });

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-sfx]");
      if (target) playHover();
    };
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-sfx]");
      if (target) playClick();
    };
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
