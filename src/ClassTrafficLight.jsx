import { Component } from "react";

export class ClassTrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: 'red'
    };
  }

  handleNextState = () => {
    const { currentState } = this.state;
    let nextState;
    switch (currentState) {
      case 'red':
        nextState = 'yellow';
        break;
      case 'yellow':
        nextState = 'green';
        break;
      case 'green':
        nextState = 'red'
    }
    this.setState({ currentState: nextState });
  };


  render() {
    const { currentState } = this.state;

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div className={`circle ${currentState === 'red' ? 'red' : 'black'}`}></div>
          <div className={`circle ${currentState === 'yellow' ? 'yellow' : 'black'}`}></div>
          <div className={`circle ${currentState === 'green' ? 'green' : 'black'}`}></div>
        </div>
        <button className="next-state-button" onClick={this.handleNextState}>Next State</button>
      </div>
    )
  }
}