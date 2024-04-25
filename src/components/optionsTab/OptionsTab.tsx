"use client";

import { cn } from "@/utils/utils";
import { Baseline, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function OptionsTab() {
  const [type, setType] = useState<"timer" | "words">("timer");
  const [option, setOption] = useState<number>(15);

  return (
    <div
      className={cn(
        " flex gap-x-2 bg-tone-300  p-1 rounded-xl border border-black text-white"
      )}
    >
      <div className="flex">
        <div
          onClick={() => setType("timer")}
          className={cn(
            " relative flex items-center gap-1 px-4 py-2 cursor-pointer"
          )}
        >
          <Clock className="z-10" size={16} />
          <span className="z-10">Timer</span>
          {type === "timer" && (
            <motion.div
              layoutId="type"
              className="absolute inset-0 border rounded-lg bg-tone-400 border-tone-500"
            />
          )}
        </div>
        <div
          onClick={() => setType("words")}
          className={cn(
            " relative flex items-center gap-1 px-4 py-2 cursor-pointer"
          )}
        >
          <Baseline className="z-10" size={16} />
          <span className="z-10">Words</span>
          {type === "words" && (
            <motion.div
              layoutId="type"
              className="absolute inset-0 border rounded-lg bg-tone-400 border-tone-500"
            />
          )}
        </div>
      </div>
      <div className="w-px h-full bg-tone-500"/>
        <div className="flex ">
          <div
            onClick={() => setOption(15)}
            className={cn(" relative px-4 py-2 cursor-pointer")}
          >
            <span className="relative z-10">15</span>
            {option === 15 && (
              <motion.div
                layoutId="option"
                className="absolute inset-0 border rounded-lg bg-tone-400 border-tone-500"
              />
            )}
          </div>
          <div
            onClick={() => setOption(30)}
            className={cn(" relative px-4 py-2 cursor-pointer")}
          >
            <span className="relative z-10">30</span>
            {option === 30 && (
              <motion.div
                layoutId="option"
                className="absolute inset-0 border rounded-lg bg-tone-400 border-tone-500"
              />
            )}
          </div>
          <div
            onClick={() => setOption(60)}
            className={cn(" relative px-4 py-2 cursor-pointer")}
          >
            <span className="relative z-10">60</span>
            {option === 60 && (
              <motion.div
                layoutId="option"
                className="absolute inset-0 border rounded-lg bg-tone-400 border-tone-500"
              />
            )}
          </div>
          <div
            onClick={() => setOption(120)}
            className={cn(" relative px-4 py-2 cursor-pointer")}
          >
            <span className="relative z-10">120</span>
            {option === 120 && (
              <motion.div
                layoutId="option"
                className="absolute inset-0 border rounded-lg bg-tone-400 border-tone-500"
              />
            )}
          </div>
        </div>
    </div>
  );
}
