import { socials } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="eyebrow">04 // OPEN CHANNEL</div>
        <h2 className="section-title">Let&apos;s Build Something</h2>
        <p className="section-sub" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          Terbuka untuk proyek, kolaborasi, dan diskusi seputar development atau belajar keamanan siber bareng.
        </p>
        <div className="contact-actions">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary sfx-link" data-sfx="hover">
            [ GITHUB ]
          </a>
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost sfx-link" data-sfx="hover">
            [ INSTAGRAM ]
          </a>
          <a href={`mailto:${socials.email}`} className="btn btn-ghost sfx-link" data-sfx="hover">
            [ EMAIL ]
          </a>
        </div>
        <p className="contact-note">SECURE CHANNEL // RESPONSE TIME: 1–2 DAYS</p>
      </div>
    </section>
  );
}
