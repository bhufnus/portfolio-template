import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingNav from "@/components/FloatingNav";
import SectionDivider from "@/components/SectionDivider";
import QRPopup from "@/components/QRPopup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <QRPopup />
      <Hero />
      <SectionDivider variant="wave" className="rotate-180" />
      <Projects />
      <SectionDivider variant="wave" />
      <About />
      <SectionDivider variant="dots" />
      <Skills />

      <SectionDivider variant="line" />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
}
