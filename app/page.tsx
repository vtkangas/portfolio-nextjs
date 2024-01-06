import "./globals.css";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-950 to-[#212d42ff]">
      <Landing />
      <Projects />
    </main>
  );
}
