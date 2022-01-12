import React, { useState } from "react";
import "./RootComponent.css";

const RootComponent = () => {
  const [name, setName] = useState("Shop1");

  const Toggle = () => {
    setName((name) => (name.localeCompare("Shop1") === 0 ? "Shop2" : "Shop1"));
  };

  return (
    <div>
      <button onClick={Toggle}>Toggle shop name</button>
      <div> {name}</div>
    </div>
  );
};

export default RootComponent;
