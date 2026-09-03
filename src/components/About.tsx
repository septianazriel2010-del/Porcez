import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="eyebrow">03 // IDENTITY FILE</div>
        <h2 className="section-title">About This System</h2>
        <div className="about-grid">
          <div className="about-copy">
            <p>
              Saya <strong>Muhammad Septian Azriel Saputra</strong>, pelajar PPLG (Pengembangan Perangkat Lunak dan Gim)
              di SMKN 1 Ciomas, Bogor. Sebagian besar waktu saya habiskan untuk membangun website, tools, dan game —
              lalu penasaran bagaimana cara membuat sistem-sistem itu lebih aman.
            </p>
            <p>
              Cybersecurity di sini masih sebatas <strong>minat &amp; pembelajaran dasar</strong> — bukan klaim keahlian
              profesional — jadi tampilannya futuristik, tapi isinya tetap jujur tentang apa yang sudah saya pelajari.
            </p>
          </div>
          <div className="meta-list hud-frame">
            <span className="hud-corner tl">+</span>
            <span className="hud-corner tr">+</span>
            <span className="hud-corner bl">+</span>
            <span className="hud-corner br">+</span>
            <div className="meta-row"><span className="k">SCHOOL</span><span className="v">{profile.school}</span></div>
            <div className="meta-row"><span className="k">MAJOR</span><span className="v">{profile.major}</span></div>
            <div className="meta-row"><span className="k">LOCATION</span><span className="v">{profile.location}</span></div>
            <div className="meta-row"><span className="k">FOCUS</span><span className="v">Web · Game · Security Basics</span></div>
            <div className="meta-row"><span className="k">STATUS</span><span className="v" style={{ color: "var(--green)" }}>ACTIVELY BUILDING</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
