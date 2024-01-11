import "./globals.css";
import About from "@/components/About";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-950 to-[#212d42ff] overflow-hidden">
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
