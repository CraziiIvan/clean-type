"use client";

import useOptionStore from "@/hooks/useContext";
import { motion } from "framer-motion";

export default function Caret() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: .1 ,opacity: { repeat: Infinity, repeatDelay: 1 }}}
      className="top-[66px] absolute w-10 bg-gradient-to-l from-[#ffffff10] to-transparent h-7 border-r-2 border-r-neutral-500"
    />
  );
}
