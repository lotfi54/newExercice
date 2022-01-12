import React from "react";
import ChangeNumber from "./ChangeNumber";

const Shop = ({ name }) => {
  return (
    <div className="p-3">
      <h2>{name}</h2>
      <ChangeNumber />
    </div>
  );
};

export default Shop;
