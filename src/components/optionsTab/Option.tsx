"use client";

import { Clock, Text } from "lucide-react";
import { GeistSans } from "geist/font/sans";
import useOptionStore from "@/utils/useContext";
import { cn } from "@/utils/utils";

type TOptionsProps = {
  title: string;
  options: number[];
};

export default function Option({ title, options }: TOptionsProps) {
  const { active, setActive, quote, timer } = useOptionStore();

  function setActiveHandler(title: string) {
    setActive(title.toLocaleLowerCase());
  }

  const isActive = active === title.toLowerCase();

  return (
    <div
      className={cn("flex items-center px-4 rounded-full h-9 max-w-24 overflow-hidden", {
        "bg-neutral-900 border border-neutral-800 max-w-96": isActive,
      })}
    >
      <button
        onClick={() => setActiveHandler(title)}
        className={cn(
          GeistSans.className,
          "flex items-center text-neutral-500 gap-x-2 ease hover:text-white mr-5",
          { "text-white": isActive }
        )}
      >
        {title === "Quote" && <Text size={16} />}
        {title === "Timer" && <Clock size={16} />}
        <span>{title}</span>
      </button>
      <ul className="flex gap-x-3">
        {options.map((option) => {
          return (
            <li
              className={cn(
                "cursor-pointer ease text-neutral-600 hover:text-white",
                {
                  "text-white":
                    active === "quote" ? quote === option : timer === option,
                }
              )}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
