import { useState } from 'react';

const arrColors = ['red', 'yellow', 'green']

export const FunctionalTrafficLight = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleNextState = () => {
    const nextColorIndex = currentColorIndex === 0 ? arrColors.length - 1 : currentColorIndex - 1;
    setCurrentColorIndex(nextColorIndex);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {arrColors.map((color) => (
          <div className={`circle ${
            color === arrColors[currentColorIndex] ? color : 'black'}`}></div> 
        ))}
      </div>
      <button className="next-state-button" onClick={handleNextState}>Next State</button>
    </div>
  );
}