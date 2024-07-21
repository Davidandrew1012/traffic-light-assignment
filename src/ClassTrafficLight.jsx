import { Component } from "react";

const arrColors = ['red', 'yellow', 'green']

export class ClassTrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'red'
    };
  }

  handleNextColor = () => {
    const { currentColor } = this.state;
    const currentIndex = arrColors.indexOf(currentColor);
    const nextIndex = (currentIndex - 1 + arrColors.length) % arrColors.length;
    this.setState({ currentColor: arrColors[nextIndex] });
  };


  render() {
    const { currentColor } = this.state;

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {arrColors.map(color => (
            <div
              key={color}
              className={`circle ${currentColor === color ? color : 'black'}`}
            ></div>
          ))}
        </div>
        <button className="next-state-button" onClick={this.handleNextColor}>
          Next State
        </button>
      </div>
    );
  }
}