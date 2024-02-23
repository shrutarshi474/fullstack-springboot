import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
// // import "./index.css";
// // import App from "./App";
// // import reportWebVitals from "./reportWebVitals";
// import Favcolor from "./Usestate";
// import Car from "./Car";
// import Name from "./Name";
// import App from "./Form";
// import Timer from "./UseEffect";
// import Component1 from "./UseContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <h1>React Hooks</h1>
//     <Favcolor></Favcolor>
//     <Car></Car>
//     <Name></Name>
//     <App></App>
//     <Timer></Timer>
//     <component1></component1>
//   </React.StrictMode>
// );

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jack");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>

      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <button onClick={() => setUser("Tom")}>Change user to Tom</button>

      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Component1></Component1>
  </React.StrictMode>
);
