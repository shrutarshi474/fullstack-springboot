import React from "react";
import "./style.css";

function Car(props) {
  return (
    <>
      <div className="card">
        <img height={200} width={300} src={props.imgcsrc} alt="" />
        <h1 className="text-center">{props.title}</h1>
        <br />
        <hr />
        <p>{props.desc}</p>
      </div>
    </>
  );
}

export default Car;
