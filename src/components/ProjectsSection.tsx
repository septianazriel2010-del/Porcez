"use client";

import { useState } from "react";
import Image from "next/image";
import GlitchText from "./GlitchText";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "@/lib/data";

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">02 // ARCHIVE</div>
        <h2 className="section-title">Project Logs</h2>
        <p className="section-sub">
          Kumpulan proyek yang sudah dan sedang saya kerjakan. Klik <strong style={{ color: "var(--ink)" }}>DETAILED LOGS</strong>{" "}
          untuk membuka data lengkapnya.
        </p>
        <div id="projects-grid" className="projects-grid">
          {projects.map((p) => (
            <article className="project-card hud-frame" key={p.id}>
              <span className="hud-corner tl">+</span>
              <span className="hud-corner tr">+</span>
              <span className="hud-corner bl">+</span>
              <span className="hud-corner br">+</span>

              <div
                className="project-media"
                style={{ "--accent": p.accent, "--accent-a": p.accentA } as React.CSSProperties}
              >
                <span className="mcorner tl" />
                <span className="mcorner tr" />
                <span className="mcorner bl" />
                <span className="mcorner br" />
                <span className="status-pill">{p.status}</span>
                {p.image ? (
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 640px) 100vw, 400px" style={{ objectFit: "cover" }} />
                ) : (
                  <>
                    <span className="glyph">{p.glyph}</span>
                    <span className="ph-label">[ IMAGE PLACEHOLDER — GANTI DENGAN SCREENSHOT ]</span>
                  </>
                )}
              </div>

              <div>
                <GlitchText text={p.title} as="div" className="project-title" />
                <div className="project-cat">{p.category}</div>
              </div>

              <p className="project-summary">{p.summary}</p>

              <div className="project-badges">
                {p.stack.map((s) => (
                  <span className="badge" key={s}>[ {s} ]</span>
                ))}
              </div>

              <div className="project-actions">
                <button
                  type="button"
                  className="btn btn-primary sfx-link"
                  data-sfx="hover"
                  onClick={() => setSelected(p)}
                >
                  [ DETAILED LOGS ]
                </button>
                {p.links.repo ? (
                  <a
                    href={p.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost sfx-link"
                    data-sfx="hover"
                  >
                    [ GITHUB ]
                  </a>
                ) : (
                  <button type="button" className="btn btn-ghost" disabled>[ LINK N/A ]</button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
