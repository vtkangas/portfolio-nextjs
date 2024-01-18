'use client'

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { contactLinks } from "@/lib/data";
import { ContactLink } from "@/types/types";


export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      id={"contact"}
      className="absolute flex justify-center w-screen max-w-full h-screen py-20 px-[5vw] z-10"
    >
      <motion.div
        ref={ref}
        style={{
          opacity: opacityProgess,
        }}
        className="flex flex-col gap-8 justify-center items-center text-center text-white max-w-5xl h-full"
      >
        <h1 className="uppercase text-4xl sm:text-5xl font-bold">
          Yhteystiedot
        </h1>
        <ul className="flex flex-col gap-4">
          {contactLinks.map((link: ContactLink) => (
            <li key={link.label}>
              <Link href={link.url} target="_blank" rel="noopener noreferrer" title={link.title}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
