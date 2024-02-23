import React, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //   });

  function Add() {
    setCount(count + 1);
  }

  const sub = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Timer: {count}</h1>
      <button onClick={Add}>Add</button>
      <button onClick={sub}>Subtract</button>
    </>
  );
}

export default Timer;
