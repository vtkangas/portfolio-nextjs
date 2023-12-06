import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Section>
        <div className="flex items-center justify-center min-h-full w-full bg-[#3772ff] text-white text-4xl">
          section 1
        </div>
      </Section>
      <Section>
        <div id="2" className="flex items-center justify-center min-h-full w-full bg-[#708090] text-white text-4xl">
          section 2
        </div>
      </Section>
      <Section>
        <div id="3" className="flex items-center justify-center min-h-full w-full bg-[#f3f356] text-white text-4xl">
          section 3
        </div>
      </Section>
      <Section>
        <div id="4" className="flex items-center justify-center min-h-full w-full bg-[#ADD8E6] text-white text-4xl">
          section 4
        </div>
      </Section>
    </main>
  )
}
