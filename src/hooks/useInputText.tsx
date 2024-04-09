"use client"

import { useState, useEffect } from 'react';

export default function useInputText() {

  const [ index, setIndex ] = useState<number>(0)
  const [ wordList, setWordList ] = useState<string[]>([])
  const [ text, setText] = useState<string>('');
  
  useEffect(() => {
    
    function handleKeyPress (event: KeyboardEvent) {
  
      if (/^[a-zA-Z]*$/.test(event.key)) {
        setText(prevTexts => prevTexts.concat(event.key));
      } else if ( event.key === " " ) {
        setWordList(preWords => [ ...preWords, text])
        setIndex(prevIndex => prevIndex += 1)
        setText("")
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [text]);

  return { wordList, text, index};
};
