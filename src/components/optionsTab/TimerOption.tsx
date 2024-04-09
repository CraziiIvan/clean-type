"use client";

import { Clock } from "lucide-react";
import { GeistSans } from "geist/font/sans";
import useOptionStore from "@/hooks/useContext";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";
import { TTimer } from "@/store";

type TOptionsProps = {
  title: string;
  options: TTimer[];
};

export default function TimerOption({ title, options }: TOptionsProps) {
  const { active, setActive, timer, setTimer } = useOptionStore();

  function setActiveHandler(title: string) {
    setActive("timer");
  }

  function setOptionHandler(option: TTimer) {
    setTimer(option)
  }

  const isActive = active === "timer"

  const variants = {
    active: {maxWidth: "500px"},
    inactive: {maxWidth: "96px"}
  }

  return (
    <motion.div
      animate={isActive ? "active" : "inactive"}
      variants={variants}
      className={cn("flex items-center px-4 rounded-full h-9 overflow-hidden", {
        "bg-neutral-900 border border-neutral-800 ": isActive,
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
        <Clock size={16}/>
        <span>{title}</span>
      </button>
      <ul className="flex gap-x-3">
        {options.map((option) => {
          return (
            <li
            key={option}
                onClick={() => setOptionHandler(option)}
              className={cn(
                "cursor-pointer ease text-neutral-600 hover:text-white",
                {
                  "text-white":
                    timer === option,
                }
              )}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}
