"use client";

import { useState } from "react";
import { isSfxEnabled, setSfxEnabled } from "@/lib/sound";

export default function Nav() {
  const [on, setOn] = useState(true);

  const toggle = () => {
    const next = !isSfxEnabled();
    setSfxEnabled(next);
    setOn(next);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">
          <span className="dot" /> SEPTIAN.SYS
        </div>
        <nav className="links">
          <a href="#audit" className="sfx-link" data-sfx="hover">AUDIT</a>
          <a href="#projects" className="sfx-link" data-sfx="hover">PROJECTS</a>
          <a href="#about" className="sfx-link" data-sfx="hover">ABOUT</a>
          <a href="#contact" className="sfx-link" data-sfx="hover">CONTACT</a>
        </nav>
        <button
          id="sfx-toggle"
          type="button"
          data-sfx="hover"
          aria-pressed={on}
          className={on ? "" : "off"}
          onClick={toggle}
        >
          <span className="sfx-dot" />
          <span id="sfx-label">SFX: {on ? "ON" : "OFF"}</span>
        </button>
      </div>
    </header>
  );
}
