'use client'

import stars from "@/public/images/view/starsfull.svg";
import glow from "@/public/images/view/earth/glow.svg"
import earth from "@/public/images/view/earth/earth.svg";
import clouds from "@/public/images/view/earth/clouds.svg";
import moon from "@/public/images/view/moon.svg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export default function Landing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const moonY = useTransform(scrollYProgress, [0, 1], ["10%", "160%"]);
  const earthY = useTransform(scrollYProgress, [0, 1], ["0%", "-190%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="relative w-screen max-w-full h-[120vh] overflow-hidden">

      <div className="fixed w-full h-full bg-repeat scale-150 -top-5 left-12 animate-[pulse_6s_infinite]" style={{backgroundImage: `url(${stars.src})`}}></div>
      <div className="fixed w-full h-full bg-repeat rotate-180  animate-pulse" style={{backgroundImage: `url(${stars.src})`}}></div> 


      <div className="grid grid-rows-3 h-screen w-full max-w-[1060px] m-auto z-0">
        {/* moon */}
        <motion.div className="relative row-span-1 w-full" style={{ y: moonY }}>
          <Image
            priority
            src={moon}
            alt="moon"
            className="h-full w-auto scale-75 sm:scale-100"
          />
        </motion.div>

        {/* header */}
        <motion.div style={{ y: textY }} className="realtive row-span-1 flex justify-center items-center z-10">
          <div className="w-fit">
            <h1 className="text-3xl sm:text-7xl uppercase font-bold tracking-widest text-center text-white">Ville Kangas</h1>          
            <h3 className="text-sm sm:text-2xl uppercase italic font-bold tracking-widest text-center text-white">web-kehittäjä</h3>
          </div>
        </motion.div>

        {/* earth */}
        <motion.div style={{ y: earthY }}  className="relative flex row-span-1 w-full justify-end z-20">
          <Image
            priority
            src={glow}
            alt="glow"
            className="absolute h-full w-auto animate-pulse scale-[2.5] lg:scale-[3]"
          />
          {/* this is wrapped with spin-animation div so the animation won't effect the scale of image */}
          <div className="absolute w-auto h-full animate-[spin_60s_linear_infinite]">
            <Image
              priority
              src={earth}
              alt="earth"
              className="h-full w-auto scale-[2.5] sm:scale-[3]"
            />
          </div>
          <Image
            priority
            src={clouds}
            alt="clouds"
            className="h-full w-auto scale-[2.5] sm:scale-[3]"
          />
        </motion.div>

      </div>
    </div>
  )
}
