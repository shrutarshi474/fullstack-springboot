import React from "react";

function Car() {
  let name = "BMW";
  let color = "red";
  return (
    <>
      <h1>This is a {name} car.</h1>
      <p>The color of this car is {color}.</p>
    </>
  );
}

function Car2() {
  let name = "tata";
  let color = "red";
  return (
    <>
      <h1>This is a {name} car.</h1>
      <p>The color of this car is {color}.</p>
    </>
  );
}

// export default Car;
export { Car, Car2 };
