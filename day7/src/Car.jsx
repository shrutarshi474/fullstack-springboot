import React, { useState } from "react";
function Car() {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "320i",
    year: "2019",
    color: "Red",
  });

  function UpdateColor() {
    setCar({ ...car, color: "Blue", brand: "Audi" });
  }

  return (
    <>
      <h1>
        its a {car.color} {car.model} from {car.year} brand: {car.brand}.
      </h1>
      <button onClick={UpdateColor}>Blue</button>
    </>
  );
}

export default Car;
