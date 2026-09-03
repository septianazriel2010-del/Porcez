import ThreeBackground from "@/components/ThreeBackground";
import HudGridCanvas from "@/components/HudGridCanvas";
import Overlays from "@/components/Overlays";
import SfxWiring from "@/components/SfxWiring";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AuditLog from "@/components/AuditLog";
import SkillsStrip from "@/components/SkillsStrip";
import ProjectsSection from "@/components/ProjectsSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SfxWiring />
      <ThreeBackground />
      <HudGridCanvas />
      <Overlays />
      <Nav />

      <main>
        <Hero />
        <AuditLog />
        <SkillsStrip />
        <ProjectsSection />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
