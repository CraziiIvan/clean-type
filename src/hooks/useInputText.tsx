"use client"

import { useState, useEffect } from 'react';

export default function useInputText() {

  const [ wordIndex, setWordIndex ] = useState<number>(0)
  const [ wordList, setWordList ] = useState<string[]>([])
  const [ text, setText] = useState<string>('');
  
  useEffect(() => {
    
    function handleKeyPress (event: KeyboardEvent) {

      if (event.key === " ") {
        setText(prevText => prevText.concat(event.key))
        return
      }
  
      if (/^[a-zA-Z]*$/.test(event.key)) {
        setText(prevTexts => prevTexts.concat(event.key));
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [text]);

  return { wordList, text, wordIndex};
};
