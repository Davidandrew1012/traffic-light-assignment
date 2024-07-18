import { useState } from 'react';

export const FunctionalTrafficLight = () => {
  const [currentState, setCurrentState] = useState('red');

  const handleNextState = () => {
    switch (currentState) {
      case 'red':
        setCurrentState('yellow');
        break;
      case 'yellow':
        setCurrentState('green');
        break;
      case 'green':
        setCurrentState('red');
        break;
      default:
        setCurrentState('red')
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${currentState === 'red' ? 'red' : 'black'}`}></div>
        <div className={`circle ${currentState === 'yellow' ? 'yellow' : 'black'}`}></div>
        <div className={`circle ${currentState === 'green' ? 'green' : 'black'}`}></div>
      </div>
      <button className="next-state-button" onClick={handleNextState}>Next State</button>
    </div>
  );
}