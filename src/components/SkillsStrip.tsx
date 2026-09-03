import { skills } from "@/lib/data";

export default function SkillsStrip() {
  return (
    <section className="skills-strip">
      <div className="wrap skills-row">
        {skills.map((s) => (
          <span className="skill-chip sfx-link" data-sfx="hover" key={s}>
            <span className="bracket">[</span>
            {s}
            <span className="bracket">]</span>
          </span>
        ))}
      </div>
    </section>
  );
}
