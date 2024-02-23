import React, { useState } from "react";

function Name() {
  const [name, setName] = useState("lisicatech");
  function changename() {
    let val = name;
    if (val === "lisicatech") {
      setName("ray");
    } else if (val === "ray") {
      setName("lisicatech");
    }
  }
  return (
    <>
      <h1> My name is {name}</h1>
      <button onClick={changename}>Update name</button>
    </>
  );
}

export default Name;
