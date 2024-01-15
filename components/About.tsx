import Me from "./Me";
import Header from "./Header";

export default function About() {
  return (
    <div
      id={"about"}
      className="relative w-screen max-w-full min-h-screen py-20 bg-[#EEF1FCff]"
    >
      <Header />
      <div className="flex justify-center text-center">
        <Me />
      </div>
    </div>
  );
}
