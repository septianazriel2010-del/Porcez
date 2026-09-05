// ─────────────────────────────────────────────────────────────
// SEMUA KONTEN YANG DAPAT DIEDIT ADA DI SINI.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "MUHAMMAD SEPTIAN AZRIEL SAPUTRA",
  role: "DEVELOPER // GAME DEV // CYBERSECURITY ENTHUSIAST",
  desc:
    "Pelajar PPLG di SMKN 1 Ciomas yang senang membangun sistem digital — dari web app, game, sampai belajar bagaimana sistem-sistem itu bisa diamankan.",
  school: "SMKN 1 Ciomas",
  major: "PPLG",
  location: "Bogor, Indonesia",
};

export const socials = {
  github: "https://github.com/septianazriel2010-del",
  instagram: "https://www.instagram.com/dxcez1",
  email: "septianazriel2010@gmail.com",
};

export const skills = [
  "PHP",
  "JAVASCRIPT",
  "NODE.JS",
  "MYSQL",
  "LUA / ROBLOX",
  "GIT",
  "LINUX BASICS",
  "SECURITY FUNDAMENTALS",
];

export type AuditTag = "pass" | "learn" | "flag";
export const auditLog: { tag: AuditTag; label: string; text: string }[] = [
  { tag: "pass", label: "PRACTICING", text: "Validasi & sanitasi input di setiap form yang saya buat" },
  { tag: "pass", label: "PRACTICING", text: "Password di-hash, tidak pernah disimpan plaintext" },
  { tag: "learn", label: "LEARNING", text: "OWASP Top 10 — masih terus dipelajari secara bertahap" },
  { tag: "learn", label: "LEARNING", text: "Dasar-dasar jaringan & keamanan lewat lab CTF yang legal" },
  { tag: "flag", label: "HONEST FLAG", text: "Belum punya pengalaman audit profesional — masih level pemula" },
];

export type Project = {
  id: string;
  code: string;
  title: string;
  category: string;
  status: "COMPLETED" | "IN PROGRESS" | "LEARNING";
  accent: string;
  accentA: string;
  glyph: string;
  image?: string; // opsional — path ke screenshot di /public/images/, mis. "/images/ppdb.jpg"
  stack: string[];
  summary: string;
  overview: string;
  features: string[];
  notes: string;
  role: string;
  links: { repo: string; demo: string };
};

export const projects: Project[] = [
  {
    id: "ppdb",
    code: "LOG_001",
    title: "PPDB TK An-Nabil",
    category: "Web Development",
    status: "COMPLETED",
    accent: "var(--cyan)",
    accentA: "rgba(0,243,255,0.14)",
    glyph: "PPDB",
    stack: ["PHP", "MYSQL", "JAVASCRIPT"],
    summary: "Sistem pendaftaran siswa TK berbasis web untuk menggantikan proses manual berbasis kertas.",
    overview: "Platform penerimaan peserta didik digital untuk sebuah TK, dibangun untuk mengganti pendaftaran manual dengan alur online yang lebih terstruktur.",
    features: [
      "Formulir pendaftaran online dengan validasi",
      "Upload & pelacakan dokumen pendaftar",
      "Dashboard admin untuk memeriksa data pendaftar",
      "Update status pendaftaran untuk orang tua",
    ],
    notes: "Fokus utama proyek ini adalah UX yang sederhana untuk orang tua, dengan struktur data backend yang tetap rapi di sisi admin.",
    role: "Full-stack Developer",
    links: { repo: "https://github.com/septianazriel2010-del/ppdb_tk_an_nabil.git", demo: "" },
  },
  {
  id: "sentinelscan",
  code: "LOG_002",
  title: "SentinelScan",
  category: "Cybersecurity",
  status: "COMPLETED",

  accent: "var(--red)",
  accentA: "rgba(255,60,60,0.14)",
  glyph: "SS",

  stack: ["NEXT.JS", "TYPESCRIPT", "NODE.JS", "HTTP", "SECURITY HEADERS"],

  summary: "Security header scanner berbasis web untuk menganalisis dan menilai tingkat hardening keamanan sebuah website.",

  overview: "Tool cybersecurity yang melakukan pemeriksaan langsung terhadap HTTP response headers dari target publik untuk mengidentifikasi konfigurasi keamanan browser yang tersedia, hilang, atau perlu diperkuat.",

  features: [
    "Live scanning terhadap HTTP response headers",
    "Scoring security posture dengan skala 0–100",
    "Pemeriksaan 9 security headers modern",
    "Identifikasi header yang missing atau sudah terkonfigurasi",
    "Security insights dan rekomendasi hardening",
    "Menampilkan HTTP status, HTTPS, dan response time",
    "Export hasil scan dalam format JSON"
  ],

  notes: "Fokus utama proyek ini adalah memberikan gambaran cepat mengenai security posture sebuah website melalui pemeriksaan HTTP security headers tanpa menyimpan riwayat hasil scan.",

  role: "Full-stack Developer",

  links: {
    repo: "https://github.com/septianazriel2010-del/CeScans.git",
    demo: "https://cescans-app.vercel.app"
  }
},
{
id: "ciphervault",
code: "LOG_003",
title: "CIPHERVAULT",
category: "Cybersecurity",
status: "COMPLETED",

accent: "var(--purple)",
accentA: "rgba(168,85,247,0.14)",
glyph: "CV",

stack: ["REACT", "JAVASCRIPT", "WEB CRYPTO API", "AES", "RSA", "SHA"],

summary: "Studio enkripsi dan dekripsi berbasis web yang memproses data secara lokal di browser menggunakan Web Crypto API.",

overview: "Platform keamanan interaktif untuk melakukan enkripsi, dekripsi, hashing, dan eksperimen kriptografi klasik langsung di browser tanpa perlu mengirim data ke server eksternal.",

features: [
  "Mode Encrypt dan Decrypt untuk teks maupun file",
  "AES-GCM, AES-CBC, AES-CTR, dan RSA-OAEP",
  "Hash satu arah menggunakan SHA-256, SHA-384, dan SHA-512",
  "Kriptografi edukatif seperti Caesar, Vigenère, XOR, dan Base64",
  "Pembuatan kunci 256-bit secara langsung di browser",
  "Security log real-time untuk memantau proses kriptografi",
  "Pemrosesan data secara lokal menggunakan Web Crypto API"
],

notes: "Fokus utama proyek ini adalah memberikan pengalaman eksplorasi kriptografi yang interaktif dengan pemrosesan lokal di browser. Tool ini ditujukan untuk edukasi dan penggunaan umum, bukan sebagai sistem keamanan enterprise yang telah diaudit.",

role: "Full-stack Developer",

links: {
  repo: "https://github.com/septianazriel2010-del/HashCez.git",
  demo: "https://hash-cez.vercel.app"
}
},
{
  id: "cyber-remote-link",
  code: "LOG_004",
  title: "CYBER REMOTE LINK",
  category: "Cybersecurity",
  status: "COMPLETED",
  accent: "var(--red)",
  accentA: "rgba(239,68,68,0.14)",
  glyph: "CR",
  stack: ["NEXT.JS", "TYPESCRIPT", "NODE.JS", "SOCKET.IO", "WEBRTC", "WEB API"],
  summary: "Platform remote device berbasis browser yang memungkinkan perangkat terhubung melalui internet dengan akses kapabilitas berdasarkan consent pengguna.",
  overview: "Platform remote access berbasis browser yang memungkinkan dua perangkat terhubung tanpa instalasi aplikasi. Perangkat Target menentukan kapabilitas seperti kamera, mikrofon, lokasi, motion sensor, dan screen share yang ingin dibagikan, kemudian perangkat Controller terhubung melalui session QR sementara.",
  features: [
    "Pairing perangkat menggunakan QR code sementara",
    "Akses kamera, mikrofon, lokasi, motion sensor, dan screen share berdasarkan izin pengguna",
    "WebRTC untuk komunikasi langsung antar perangkat",
    "Node.js dan Socket.IO sebagai signaling server",
    "Browser permission native untuk setiap kapabilitas sensitif",
    "Session QR sekali pakai dan kedaluwarsa setelah 3 menit",
    "Server menjadi sumber kebenaran untuk kapabilitas yang diberikan",
    "Target dapat memantau dan memutus koneksi kapan saja",
    "Dashboard terpisah untuk Target dan Controller"
  ],
  notes: "Proyek ini berfokus pada remote access berbasis consent dengan kontrol penuh di sisi pengguna. Sistem telah melalui type-check, production build, dan smoke test end-to-end. Beberapa pengembangan lanjutan seperti TURN server, multi-stream simultan, dan session store persisten masih diperlukan sebelum production penuh.",
  role: "Full-stack Developer",
  links: {
    repo: "https://github.com/septianazriel2010-del/CezRemotesAcces.git",
    demo: "https://cez-remotes-acces.vercel.app/"
  }
},
];