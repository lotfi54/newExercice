import React, { useState, useRef, useEffect } from "react";
import "./RootComponent.css";

const Calculate = (value, cuts) => {
  let initValue = value;
  const cutt = cuts.sort((a, b) => b - a);
  return cutt.map((cut) => {
    if (initValue / cut >= 1) {
      const nbr = parseInt(initValue / cut);
      initValue -= nbr * cut;
      return {
        cut: cut,
        nbr: nbr,
      };
    } else {
      return {
        cut: cut,
        nbr: 0,
      };
    }
  });
};

const CalculateChange = ({ value, cuts }) => {
  const CalculateAndCuts = Calculate(value, cuts);
  return (
    value > 0 && (
      <div>
        <div>Change for: {value}</div>
        <div>
          {CalculateAndCuts.map(({ cut, nbr }, index) => (
            <div key={index}>
              {cut} x {nbr}
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default CalculateChange;
