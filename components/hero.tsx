"use client";
import { motion } from "framer-motion";
import { Highlight, HeroHighlight } from "@/components/hero-highlight";
import Image from "next/image";
import { FlipWords } from "./ui/flip-words";

const words = ["efficient", "fast", "beautiful", "modern"];

export function HeroSection() {
  return (
    <HeroHighlight>
      <div className="flex flex-col items-center justify-center h-screen px-4 mt-16">
        <div className="relative w-full flex items-center justify-center py-4">
          <Image
            src="/profile.gif"
            width={350}
            height={350}
            objectFit="cover"
            alt="Picture of the author"
            className="rounded-full"
          />
        </div>
        <div className="w-full text-center mt-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-opacity-80 max-w-4xl leading-relaxed lg:leading-snug"
          >
            <Highlight className="text-white">
              Full Stack Developer
            </Highlight>
          </motion.h1>
          <div className="text-3xl font-normal text-neutral-400 w-3/4 mx-auto mt-4">
            Building
            <FlipWords words={words} />
            web apps. <br />
            My name is Karan. A Web Developer based in Toronto, ON.
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
}
