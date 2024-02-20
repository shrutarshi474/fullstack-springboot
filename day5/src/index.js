import React from "react";
import ReactDOM from "react-dom/client";
import Car from "./Car";
import MyForm from "./Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// function Redcar(name, age) {
//   alert(name);
//   alert(age);
// }

// function Ship() {
//   const sizeofship = 10000;
//   if (sizeofship === 10000) {
//     return (
//       <>
//         <h1> Its a big ship</h1>
//         <img
//           height={200}
//           width={200}
//           src="https://i.insider.com/64b86915a46ce30019a2328f?width=1136&format=jpeg"
//         />
//       </>
//     );
//   } else if (sizeofship < 10000) {
//     return (
//       <>
//         <h1>Its a small ship</h1>\
//         <img
//           height={200}
//           width={200}
//           src="https://www.royalcaribbeanblog.com/sites/default/files/styles/fb_style/public/fb/Boat%20vs%20ship.png?itok=5FL0wxwk"
//         />
//       </>
//     );
//   }
// }

// function Redcar() {
//   return (
//     <>
//       <h1>The red car</h1>
//       <h2>the card good</h2>
//     </>
//   );
// }

// function Whitecar() {
//   return <h1>White Car</h1>;
// }

// function Cars(props) {
//   const iscolor = props.iscolor;
//   if (iscolor === "red") {
//     return <Redcar></Redcar>;
//   } else {
//     return <Whitecar></Whitecar>;
//   }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>Hello world</h1>
    {/* <Car imgcsrc="https://cdn.pixabay.com/photo/2012/04/12/23/47/car-30984_640.png"></Car>
    <Car
      imgcsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSP8nLDKc5W0B3Z-702hCU-1UiMnhd6NPclind4ZBp4aCFtSMlvJJTAb3GAuUGP_cD3A&usqp=CAU"
      desc="this good car"
      title="THe red car"
    ></Car> */}
    {/* <button onClick={() => Redcar("Car started...", "2")}>click me</button> */}
    {/* <Cars iscolor="red"></Cars>
    <Ship></Ship> */}
    <MyForm></MyForm>
  </>
);
