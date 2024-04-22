"use client"

import { useState, useEffect } from 'react';

export default function useInputText() {

  const [ text, setText] = useState<string>('');
  
  useEffect(() => {
    
    function handleKeyPress (event: KeyboardEvent) {

      if (event.key === "Backspace") {
        setText(prevText => prevText.slice(0, -1))
        return
      }
  
      if (/^[a-zA-Z\s]*$/.test(event.key)) {
        setText(prevTexts => prevTexts.concat(event.key));
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [text]);

  return { text, setText };
};
