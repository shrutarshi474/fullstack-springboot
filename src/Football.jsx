import React from "react";

function Football() {
  const kick = () => {
    alert("great kick");
  };

  return (
    <>
      <h1>Football</h1>
      <button onClick={kick}>Kick the ball!</button>
    </>
  );
}

export default Football;
