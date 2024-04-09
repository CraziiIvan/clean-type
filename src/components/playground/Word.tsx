import useInputText from "@/hooks/useInputText";
import { cn } from "@/utils/utils";

type TWordProps = {
  word: string;
  active: boolean
};

export default function Word({ word, active }: TWordProps) {

    const { text } = useInputText()

  return (
    <div>
      {word.split("").map((letter, i) => (
        <Letter key={i} letter={letter} active={active && text.length - 1 === i }/>
      ))}
    </div>
  );
}

type TLetterProps = {
    letter: string
    active: boolean
}

function Letter({letter, active}: TLetterProps) {

    const { text } = useInputText()

    return ( <span className={cn({"text-white" : active && text.slice(-1) === letter, "text-red-800": active && text.slice(-1) !== letter})}>{letter}</span>)
}
