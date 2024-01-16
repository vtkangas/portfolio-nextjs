"use client";

import Image from "next/image";
import Earth from "./Earth";
import moon from "@/public/images/view/moon.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Landing() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1 start", "end start"],
  });

  const moonY = useTransform(scrollYProgress, [0, 1], ["10%", "80%"]);
  const earthY = useTransform(scrollYProgress, [0, 1], ["20%", "-50%"]);

  return (
    <div
      ref={ref}
      className="relative flex justify-center w-screen max-w-full h-[80vh] py-12 px-2"
    >
      <div className="grid grid-cols-3 grid-rows-3 items-center h-full w-full max-w-5xl -top-16">
        <motion.div
          style={{ y: moonY }}
          className="col-span-1 row-span-2 justify-start items-start w-full h-full"
        >
          <Image priority src={moon} alt="moon" className="h-1/2 max-h-[300px] w-auto" />
        </motion.div>
        <motion.div
          style={{ y: earthY }}
          className="relative col-span-2 row-span-3 justify-end -right-[20%] w-full h-full z-10"
        >
          <Earth />
        </motion.div>
      </div>
    </div>
  );
}
