import { auditLog } from "@/lib/data";

export default function AuditLog() {
  return (
    <section id="audit">
      <div className="wrap">
        <div className="eyebrow">01 // THREAT MODEL</div>
        <h2 className="section-title">Security Mindset</h2>
        <p className="section-sub">
          Ini bukan laporan audit profesional — hanya prinsip pribadi yang saya pegang saat membangun sistem,
          dan yang masih terus saya pelajari.
        </p>
        <div className="audit-log hud-frame">
          <span className="hud-corner tl">+</span>
          <span className="hud-corner tr">+</span>
          <span className="hud-corner bl">+</span>
          <span className="hud-corner br">+</span>
          {auditLog.map((item) => (
            <div className="audit-row" key={item.text}>
              <span className={`audit-tag ${item.tag}`}>{item.label}</span>
              <span className="audit-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
