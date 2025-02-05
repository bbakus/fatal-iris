import React, { useState, useEffect } from 'react';

function TypewriterText({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  return (
    <p className="typewriter-text">
      {displayedText}
      <span className="cursor"></span>
    </p>
  );
}

export default TypewriterText;