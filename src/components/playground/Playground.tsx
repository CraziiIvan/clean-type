import { generate } from "random-words";
import Words from "./Words";
import InputWords from "./InputWords";
import Caret from "./Caret";

export default function Playground() {

  const generatedWords = generate({exactly: 15, min: 15, minLength: 3, join: " "})

  return (
    <div
      style={{
        mask: "linear-gradient(transparent , white 30%, white 70% , transparent)",
      }}
      className="relative h-56 mt-40"
    >
      <Caret/>
      <Words generatedWords={generatedWords}/>
      <InputWords generatedWords={generatedWords}/>
    </div>
  );
}
