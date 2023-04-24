import React, { useState } from "react";

const EmojiList = () => {
  const [emojis] = useState([
    "😀",
    "😂",
    "😍",
    "👍",
    "🎉"
  ]);
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const [showResults, setShowResults] = useState(false);

  
  const handleClick = (index) => {
    const newCounts = [...counts]; 
    newCounts[index] += 1; 
    setCounts(newCounts); 
  };

 
  const getWinnerEmojis = () => {
  let maxCount = 0;
  let maxIndexes = [];
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] > maxCount) {
      maxCount = counts[i];
      maxIndexes = [i];
    } else if (counts[i] === maxCount) {
      maxIndexes.push(i);
    }
  }
  return maxIndexes.map((index) => emojis[index]);
};


  
  const emojiList = emojis.map((emoji, index) => (
    <div key={index}>
      <span>{emoji}</span>
      <button onClick={() => handleClick(index)}>Click me!</button>
      <span>{counts[index]}</span>
    </div>
  ));

  return (
    <div>
      {emojiList}
      <button onClick={() => setShowResults(true)}>Show Results</button>
      {showResults && (
        <div>
          <h2>The winner is: {getWinnerEmojis()}</h2>
        </div>
      )}
    </div>
  );
};

export default EmojiList;
