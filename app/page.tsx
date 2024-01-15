import "./globals.css";
import About from "@/components/About";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stars from "@/components/stars/Stars";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Stars />
      
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
