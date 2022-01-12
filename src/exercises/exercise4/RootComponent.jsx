import React, { useState, useRef, useEffect } from "react";
import "./RootComponent.css";
import Shop from "./Shop";

const RootComponent = () => {
  const [name, setName] = useState("Shop1");
  const Toggle = () => {
    setName((name) => (name.localeCompare("Shop1") === 0 ? "Shop2" : "Shop1"));
  };
  return (
    <div>
      <button onClick={Toggle}>Toggle shop name</button>
      <Shop name={name} />
    </div>
  );
};

export default RootComponent;
