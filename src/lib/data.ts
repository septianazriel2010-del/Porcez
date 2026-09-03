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
    links: { repo: "https://github.com/septianazriel2010-del", demo: "" },
  },
  {
    id: "rxlytics",
    code: "LOG_002",
    title: "RXLytics",
    category: "Developer Tool / Data",
    status: "IN PROGRESS",
    accent: "var(--green)",
    accentA: "rgba(0,255,157,0.14)",
    glyph: "RX",
    stack: ["NODE.JS", "POSTGRESQL", "REACT"],
    summary: "Dashboard analitik untuk memantau tren experience Roblox — konsepnya seperti 'TradingView untuk Roblox'.",
    overview: "Backend Node.js/Express yang memperkaya data publik Roblox, dipasangkan dengan dashboard untuk melihat tren visits & favorites dari waktu ke waktu.",
    features: [
      "Pipeline pengolahan & pengayaan data di server",
      "Dashboard peringkat & tren",
      "Endpoint debugging untuk cek kesehatan data",
      "Penyimpanan data dengan PostgreSQL",
    ],
    notes: "Masih dalam pengembangan aktif — tantangan utamanya menjaga pipeline tetap stabil menghadapi data pihak ketiga yang tidak selalu konsisten.",
    role: "Solo Developer",
    links: { repo: "https://github.com/septianazriel2010-del", demo: "" },
  },
  {
    id: "roblox-game",
    code: "LOG_003",
    title: "Roblox Pet & Racing Game",
    category: "Game Development",
    status: "IN PROGRESS",
    accent: "var(--red)",
    accentA: "rgba(255,0,85,0.14)",
    glyph: "GX",
    stack: ["LUA", "ROBLOX STUDIO"],
    summary: "Game Roblox bertema pet-hatching dan racing, menggabungkan mekanik koleksi dengan kompetisi balapan.",
    overview: "Game dengan sistem koleksi pet dan mode racing kompetitif, dibangun di Roblox Studio dengan sistem penyimpanan data pemain.",
    features: [
      "Sistem pet hatching & koleksi",
      "Mode gameplay racing",
      "Sistem save menggunakan DataStore",
      "Sistem hadiah harian",
      "UI pengaturan custom",
    ],
    notes: "Tantangan terbesar adalah menjaga data pemain tetap konsisten antar sesi sambil terus menambah fitur baru.",
    role: "Solo Developer",
    links: { repo: "https://github.com/septianazriel2010-del", demo: "" },
  },
  {
    id: "security-lab",
    code: "LOG_004",
    title: "Security Fundamentals Lab",
    category: "Learning / Exploration",
    status: "LEARNING",
    accent: "var(--cyan)",
    accentA: "rgba(0,243,255,0.14)",
    glyph: "SEC",
    stack: ["LINUX", "NETWORKING", "PENTEST-BASICS"],
    summary: "Catatan & latihan pribadi belajar dasar-dasar keamanan siber lewat platform CTF/lab legal.",
    overview: "Proyek pembelajaran pribadi — bukan pekerjaan profesional — berisi latihan dasar Linux, jaringan, dan konsep keamanan web melalui platform CTF/lab yang legal dan terstruktur untuk pemula.",
    features: [
      "Latihan dasar command-line & Linux",
      "Pengenalan konsep jaringan (TCP/IP, port, protokol)",
      "Latihan kerentanan web dasar di lingkungan lab legal",
      "Catatan pembelajaran & rangkuman konsep",
    ],
    notes: "Ini murni pembelajaran, bukan klaim sertifikasi atau pengalaman profesional. Semua latihan dilakukan di platform lab yang memang disediakan untuk belajar.",
    role: "Self-learner",
    links: { repo: "", demo: "" },
  },
];
