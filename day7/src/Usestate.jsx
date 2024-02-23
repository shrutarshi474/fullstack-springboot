import React, { useState } from "react";

function Favcolor() {
  const [color, setColor] = useState("red");
  const [backgroundColor, setBack] = useState("pink");

  return (
    <>
      <h1 style={{ color, backgroundColor }}>
        My Favourite Color is : {color}
      </h1>
      <button onClick={(() => setColor("black"), () => setBack("white"))}>
        black
      </button>
      <button onClick={() => setColor("Blue")}>Blue</button>
      <button onClick={() => setColor("Green")}>Green</button>
    </>
  );
}

export default Favcolor;
