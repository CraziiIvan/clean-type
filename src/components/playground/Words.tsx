type TWordsProps = {
    generatedWords: string
}

export default function Words({ generatedWords }: TWordsProps) {

  return (
    <p className="px-1 pt-16 text-2xl tracking-widest text-neutral-600">
        {generatedWords.split("").map((letter, i) => <span key={i}>{letter}</span>)}
    </p>
  )
}
