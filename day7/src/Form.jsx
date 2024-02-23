import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
    e.preventDefault();
  }

  function submitForm() {
    setHeading(name);
  }

  return (
    <div>
      <h1>Hello {headingText}</h1>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        />
        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
}
export default App;
