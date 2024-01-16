"use client";

import backHill from "@/public/images/view/backHill.svg";
import frontHill from "@/public/images/view/frontHill.svg";
import foreground from "@/public/images/view/foreground.svg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "0.8 end"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [1, 1.9]);

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
        }}
        className="sticky h-screen w-screen max-w-full"
      >
        {/* hills  */}
        <div className="w-full h-full">
          <Image
            priority
            src={backHill}
            alt="large hill illustration"
            className="absolute w-full h-auto bottom-0"
          />
        </div>
        <div className="w-full h-full">
          <Image
            priority
            src={frontHill}
            alt="hill illustration"
            className="absolute w-full h-auto bottom-0"
          />
        </div>

        {/* foreground */}
        <div className="w-full h-full">
          <Image
            priority
            src={foreground}
            alt="land"
            className="absolute w-full h-auto bottom-0"
          />
        </div>
      </motion.div>

      <div className=" bg-[#b3998aff] border-4 border-[#b3998aff] w-screen max-w-full h-fit p-5 z-50">
        <p className="text-white">© 2024 Ville Kangas</p>
      </div>
    </div>
  );
}
