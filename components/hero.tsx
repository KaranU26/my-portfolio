"use client";
import { motion } from "framer-motion";
import { Highlight, HeroHighlight } from "@/components/hero-highlight";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextGenerateHero } from "./text-generation-hero";
import { FlipWords } from "./ui/flip-words";

const words = ["efficient", "fast", "beautiful", "modern"];

export function HeroSection() {
  return (
    <HeroHighlight>
      <div className="flex flex-col lg:flex-row items-center justify-center h-screen">
        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-6 lg:w-full py-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-opacity-80 max-w-4xl leading-relaxed lg:leading-snug"
          >
            <Highlight className="text-white">
              Full Stack Web Developer
            </Highlight>
          </motion.h1>
          <div className="text-3xl font-normal text-neutral-400 w-3/4">
            Building
            <FlipWords words={words} />
            web applications. <br />
            My name is Karan. A Web Developer based in Toronto, ON.
          </div>
        </div>
        <div className="relative w-full flex items-center justify-center lg:w-3/4 py-8">
          <Image
            src="/profile.gif"
            width={550}
            height={550}
            objectFit="cover"
            alt="Picture of the author"
            className="rounded-full"
          />
        </div>
      </div>
    </HeroHighlight>
  );
}
