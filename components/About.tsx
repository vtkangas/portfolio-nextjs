"use client";

import Me from "./Me";
import Header from "./Header";

export default function About() {
  return (
    <div id={"about"} className="relative flex justify-center items-start w-screen max-w-full h-fit pb-20 z-10 bg-[#EEF1FCff] overflow-hidden">
      <div className="flex flex-col justify-center w-full max-w-5xl">
        <div className="flex justify-center w-full">
          <Header />
        </div>
        <div className="flex justify-center text-center">
          <Me />
        </div>
      </div>
    </div>
  );
}
