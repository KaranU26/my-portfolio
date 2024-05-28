"use client";
import { motion } from "framer-motion";
import { Highlight, HeroHighlight } from "@/components/hero-highlight";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextGenerateHero } from "./text-generation-hero";

export function HeroSection() {
  return (
    <HeroHighlight>
      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="relative w-56 h-56">
          <Image
            src="/me.jpg" 
            layout="fill" 
            objectFit="cover" 
            alt="Picture of the author"
            className="rounded-full"
          />
        </div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white text-opacity-80 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          <Highlight className="text-white">
            Full Stack Web Developer
          </Highlight>
        </motion.h1>
        <TextGenerateHero />
      </div>
    </HeroHighlight>
  );
}
