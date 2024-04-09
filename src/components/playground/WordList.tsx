"use client"

import { cn } from "@/utils/utils";
import { GeistMono } from "geist/font/mono";
import Word from "./Word";
import useInputText from "@/hooks/useInputText";

type TWordListProps = {
  generateWords: string[];
};

export default function WordList({ generateWords }: TWordListProps) {

  const { index } = useInputText()

  return (
    <div
      style={{
        mask: "linear-gradient(transparent , white 30%, white 70% , transparent)",
      }}
      className="relative h-56 mt-40"
    >
      <div
        className={cn(
          GeistMono.className,
          "flex flex-wrap text-2xl tracking-wide text-neutral-600 gap-x-3 gap-y-1 pt-16"
        )}
      >
        {generateWords.map((word, i) => (
          <Word key={i} word={word} active={index === i} />
        ))}
      </div>
    </div>
  );
}
