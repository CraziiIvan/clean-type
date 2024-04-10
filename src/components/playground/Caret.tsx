"use client";

import useOptionStore from "@/hooks/useContext";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Caret() {

    const { textWidth } = useOptionStore()

    useEffect(() => {
        console.log(textWidth)
    }, [textWidth])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: textWidth - 46 }}
      transition={{ duration: .1 ,opacity: { repeat: Infinity, repeatDelay: 1 }}}
      className="top-[68px] absolute w-10 bg-gradient-to-l from-[#ffffff10] to-transparent h-7 border-r-2 border-r-neutral-400"
    />
  );
}
