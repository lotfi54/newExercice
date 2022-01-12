import React, { useState, useRef, useEffect } from "react";
import CalculateChange from "./CalculateChange";

const ChangeNumber = () => {
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState();
  const cuts  = [1, 2, 5];
  return (
    <div>
      <div>
        <div className="d-flex py-2 justify-content-between">
          <div className="py-2">
            <input
              type="number"
              onChange={(event) => {
                setValue(parseInt(event.target.value));
              }}
              placeholder="integer value"
            />

            {value > 0 && (
              <button
                onClick={() => {
                  setQuantity(value);
                }}
              >
                Calculate change for {value}
              </button>
            )}
          </div>
          <CalculateChange value={quantity} cuts={cuts}   />
        </div>
      </div>
    </div>
  );
};

export default ChangeNumber;
