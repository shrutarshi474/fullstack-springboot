import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import Tick from "./Tick";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// function Color() {
//   const [color, setTime] = useState(new Date().toLocaleTimeString());
//   function update() {
//     setTime(new Date().toLocaleTimeString());
//   }
//   setInterval(update, 1000);
//   return (
//     <>
//       <h1> My car color is: {color}</h1>
//       <button onClick={update}>Update the Car color</button>
//     </>
//   );
// }

// 1.constructor
// 2. getDeriverdSateFromProps()
// 3.render()
// 4. componentDidMount()

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { carcolor: "red", carname: "BMW" };
  }
  static getDerivedStateFromProps(props, state) {
    return { carcolor: props.color, carname: props.abc };
  }
  render() {
    return (
      <h1>
        My Car Color is: {this.state.carcolor} Car Name Is :{this.state.carname}
      </h1>
    );
  }
}

// ComponentDidMount()
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
  render() {
    return (
      <>
        <h1>the time is : {this.state.time}</h1>
      </>
    );
  }
}

// Updating
// 1. get---
//2. shouldComponentUpdate()

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { carcolor: "red" };
  }
  shouldComponentUpdate() {
    return true;
  }
  updateColor = () => {
    this.setState({ carcolor: "blue" });
  };

  render() {
    return (
      <>
        <div>
          <h1>Hello my car color is : {this.state.carcolor}</h1>
          <button type="button" onClick={this.updateColor}>
            Update Color
          </button>
        </div>
      </>
    );
  }
}

// function Clock() {
//   const element = (
//     <div>
//       <h1>Hello time</h1>
//       <h2>it is{new Date().toLocaleTimeString()}</h2>
//     </div>
//   );

//   return element;
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Hello world</h1>
    <Header color="green" abc="BMW"></Header>
    <Header color="yellow"></Header>
    <Clock></Clock>
    <Color></Color>
  </React.StrictMode>
);
