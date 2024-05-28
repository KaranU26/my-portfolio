import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { LampContainer } from "@/components/ui/lamp";
import { HeaderSparkles } from "./ui/header";

const cardData = [
  {
    imageUrl: "/Ruby.png"
  },
  {
    imageUrl: "/js.png"
  },
  {
    imageUrl: "/pg.png"
  },
  {
    imageUrl: "/next.png"
  },
  {
    imageUrl: "/tw.png"
  },
  {
    imageUrl: "/python.png"
  },
  {
    imageUrl: "/React.png"
  },
  {
    imageUrl: "/python.png"
  }
];

export function Technologies() {
  return (
    <div>
      <HeaderSparkles />
      <div className="flex flex-wrap justify-center mx-auto pb-16 w-full max-w-3xl">
        {cardData.map((card, index) => (
          <div key={index}>
            <div className="relative space-y-4 p-1 h-full flex flex-col">
              <EvervaultCard imageUrl={card.imageUrl} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}