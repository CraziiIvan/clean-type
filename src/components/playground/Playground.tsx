import { generate } from "random-words";
import WordList from "./WordList";

export default function Playground() {

  const generateWords = generate({ exactly: 15, min: 15, minLength: 3 });

  return (
    <WordList generateWords={typeof generateWords !== "string" ? generateWords : []}/>
  )
}
