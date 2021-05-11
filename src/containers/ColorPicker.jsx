import React, { Component } from 'react';


var bgColors = { 
  default: "#264653",
  blue: "#2A9D8F",
  yellow: "#E9C46A",
  orange: "#f4a261",
  red: "#e76f51",
};

export default class RandomColor extends Component {
    constructor(props) {
      super(props);
      this.state = {
        bgColor: bgColors.default,
      };


    this.interval = setInterval(() => {
      let randomColor = bgColors[
        Object.keys(bgColors)[
          Math.floor(Math.random() *
          Object.keys(bgColors).length)
        ]
      ];
      this.setState(() => ({bgColor: randomColor}))
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

    render() {
      return (
        <div 
          style={{
          height: '500px',
          width: '500px',
          backgroundColor: this.state.bgColor
        }}
        >
        Colorful Changes!
        </div>
      );
    }
} 