"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { playGlitchOpen } from "@/lib/sound";
import type { Project } from "@/lib/data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    lastFocused.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    playGlitchOpen();
    const t = setTimeout(() => closeBtnRef.current?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      lastFocused.current?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div
      className="modal-overlay open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-glitch-fx" aria-hidden="true" />
      <div className="modal-panel hud-frame">
        <span className="hud-corner tl">+</span>
        <span className="hud-corner tr">+</span>
        <span className="hud-corner bl">+</span>
        <span className="hud-corner br">+</span>

        <div className="modal-topline">
          <span>
            <span className="blink">●</span> SECURE_TERMINAL // DATA_VIEWER
          </span>
          <span>LOG_ID: {project.code}</span>
        </div>

        <div className="modal-header">
          <div>
            <h3 id="modal-title">{project.title}</h3>
            <div className="modal-cat">{project.category} {"//"} {project.role}</div>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            data-sfx="hover"
            aria-label="Close detailed logs"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div
          className="modal-media"
          style={{ "--accent": project.accent, "--accent-a": project.accentA } as React.CSSProperties}
        >
          {project.image ? (
            <Image src={project.image} alt={project.title} fill sizes="700px" style={{ objectFit: "cover" }} />
          ) : (
            <span className="glyph">{project.glyph}</span>
          )}
        </div>

        <div className="modal-meta-grid">
          <div className="cell"><div className="k">STATUS</div><div className="v">{project.status}</div></div>
          <div className="cell"><div className="k">ROLE</div><div className="v">{project.role}</div></div>
          <div className="cell"><div className="k">STACK</div><div className="v">{project.stack.join(" · ")}</div></div>
        </div>

        <div className="modal-section">
          <h4>{"// OVERVIEW"}</h4>
          <p>{project.overview}</p>
        </div>
        <div className="modal-section">
          <h4>{"// KEY FEATURES"}</h4>
          <ul className="modal-features">
            {project.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
        <div className="modal-section">
          <h4>{"// NOTES"}</h4>
          <p>{project.notes}</p>
        </div>

        <div className="modal-actions">
          {project.links.repo ? (
            <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="btn btn-primary sfx-link" data-sfx="hover">
              [ REPOSITORY ]
            </a>
          ) : (
            <button type="button" className="btn btn-primary" disabled>[ REPOSITORY N/A ]</button>
          )}
          {project.links.demo ? (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-green sfx-link" data-sfx="hover">
              [ LIVE DEMO ]
            </a>
          ) : (
            <button type="button" className="btn btn-green" disabled>[ DEMO N/A ]</button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
