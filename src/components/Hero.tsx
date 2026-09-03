import GlitchText from "./GlitchText";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="wrap" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="hero-tag">SYSTEM ONLINE // IDENTITY VERIFIED</div>
        <h1>
          <GlitchText text="MUHAMMAD SEPTIAN" as="span" />
          <br />
          <GlitchText text="AZRIEL SAPUTRA" as="span" className="accent" />
        </h1>
        <p className="role-line">{profile.role}</p>
        <p className="desc">{profile.desc}</p>
        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary sfx-link" data-sfx="hover">[ VIEW PROJECT LOGS ]</a>
          <a href="#contact" className="btn btn-ghost sfx-link" data-sfx="hover">[ ESTABLISH CONTACT ]</a>
        </div>
      </div>
      <div className="scroll-cue">
        <span>SCROLL</span>
        <span className="bar" />
      </div>
    </section>
  );
}
