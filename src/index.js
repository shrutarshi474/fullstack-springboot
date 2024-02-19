import React from "react";
import ReactDOM from "react-dom/client";
import { Car, Car2 } from "./Car";
import Football from "./Football";

import "./App.css";
// import Car from "./Car";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// class component
// class Car extends React.Component {
//   render() {
//     return <h1>Hi, I have a red car!</h1>;
//   }
// }

// class Person extends React.Component {
//   constructor() {
//     this.state = { color: "red" };
//   }
//   render() {
//     return <h1>I am wearing a {this.state.color} shirt.</h1>;
//   }
// }

// function component

function Contain() {
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "brown", textAlign: "center" }}
      >
        <Car></Car>
        <Car2></Car2>
        <Football></Football>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Contain></Contain>
    <Contain></Contain>
  </>
);
