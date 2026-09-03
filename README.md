# Cyber Portfolio — React / Next.js Version

Versi React dari portfolio cyberpunk yang sebelumnya berupa file HTML/CSS/JS tunggal.
Sekarang jadi project Next.js 16 + React 19 + TypeScript, dan **three.js dipasang sebagai
npm package asli** (bukan lewat CDN `<script>` lagi).

## Jalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm run start
```

## Struktur

```
src/
  app/
    layout.tsx        Font Space Grotesk + JetBrains Mono, metadata
    page.tsx           Merakit semua section
    globals.css        Semua CSS (HUD, CRT scanline, corner brackets, dst — port 1:1 dari versi HTML)
  components/
    ThreeBackground.tsx  Scene 3D Cyber Network Core, scroll-driven (pakai npm package "three")
    HudGridCanvas.tsx    Canvas 2D particle-node network (lapisan tipis di atas Three.js)
    Overlays.tsx         Scanline / vignette / flicker CRT overlay
    SfxWiring.tsx        Delegasi event global untuk semua elemen [data-sfx]
    GlitchText.tsx       Efek scramble teks saat hover
    Nav.tsx              Navbar + toggle [ SFX: ON/OFF ]
    Hero.tsx
    AuditLog.tsx         Section "Security Mindset" (trigger scroll ke-2 / red alert)
    SkillsStrip.tsx
    ProjectsSection.tsx  Grid project + state modal
    ProjectModal.tsx     "Secure Terminal Data Viewer"
    About.tsx / Contact.tsx / Footer.tsx
  lib/
    data.ts              SEMUA konten (profil, project, audit log, skills) — edit di sini
    sound.ts              Web Audio synthesizer (hover beep + click activation, murni oscillator/noise)
```

## Edit konten

Semua teks/data ada di `src/lib/data.ts` — nggak perlu bongkar komponen untuk ganti nama,
link sosial, atau tambah/ubah project.

## Kenapa ini beda dari versi HTML tunggal sebelumnya?

Versi sebelumnya (`cyber-portfolio-project`) sengaja dibuat vanilla HTML/CSS/JS supaya bisa
langsung dibuka di browser tanpa `npm install` — makanya foldernya kecil (3 file saja).
Versi ini yang sekarang punya `node_modules`, `package.json`, dan dijalankan lewat `npm run dev`
seperti project React pada umumnya — persis seperti struktur project Next.js lain yang sudah
pernah dibuat sebelumnya di percakapan ini.

Tampilan, animasi, dan semua fitur (Web Audio SFX, HUD grid, CRT scanline, galeri project +
modal terminal, dan sekarang scroll-driven 3D Cyber Network Core pakai Three.js) — semuanya
sama persis, cuma arsitekturnya sekarang React/Next.js.
