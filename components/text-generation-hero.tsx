"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = 'Hi, Im Karandeep Ubhi. A passionate Full Stack Web Developer based in Toronto, Canada';

export function TextGenerateHero() {
  return <TextGenerateEffect words={words} />;
}
