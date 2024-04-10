"use client";

import useOptionStore from "@/hooks/useContext";
import useInputText from "@/hooks/useInputText";
import { cn } from "@/utils/utils";
import { useEffect, useRef } from "react";

type TWordsProps = {
  generatedWords: string;
};

export default function InputWords({ generatedWords }: TWordsProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  const { setTextWidth } = useOptionStore()

  const { text } = useInputText();

  useEffect(() => {
    if (textRef) {
        setTextWidth(textRef.current?.clientWidth || 0)
    }
  }, [text])

  return (
    <p
      ref={textRef}
      className="absolute px-1 text-2xl tracking-widest text-white top-16"
    >
      {generatedWords
        .split("")
        .slice(0, text.length)
        .map((letter, i) => (
          <span
            key={i}
            className={cn({ "text-red-500": generatedWords[i] !== text[i] })}
          >
            {letter}
          </span>
        ))}
    </p>
  );
}
