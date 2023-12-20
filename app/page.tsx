import "./globals.css";
import Projects from "@/components/Projects";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="relative">
      <div className="relative z-10">
        <Section>
          <div className="flex items-center justify-center min-h-full w-full bg-[#3772ff] text-white text-4xl">
            <p>section 1</p>
          </div>
        </Section>

        <Section>
          <div className="grid grid-row w-full">
            <div id="2">
              <Projects />
            </div>
            <div
              id="3"
              className="flex items-center justify-center h-screen min-h-full w-full bg-[#ffff5c] text-gray-900 text-4xl"
            >
              section 3
            </div>
          </div>
        </Section>
      </div>

      <div className="sticky bottom-0">
        <Section>
          <div className="flex items-center justify-center min-h-full w-full bg-[#ffffff] text-gray-900 text-4xl">
            section 4
          </div>
        </Section>
      </div>
    </main>
  );
}
