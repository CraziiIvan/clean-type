"use client"

import { useState } from "react"
import useOptionStore from "./useContext";
import { generate } from "random-words";


export default function useGenerateWords() {

    const [ generateWords, setGenerateWords ] = useState<string[] | string>([])

    const { quote } = useOptionStore();

    setGenerateWords(generate({ exactly: quote, min: 15, minLength: 3 }))

  return {generateWords}
}
