import React from "react";
import "./archive.css";
import DropdownButton from "../Components/DropdownButton";

const As = () => {
  return (
    <div className="arch-body">
      <div className="a1">
        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.41em",
            fontWeight: "bold",
            color: "#3a54b4",
          }}
        >
          Library Herald Archive Search
        </p>
        <DropdownButton/>
        <div className="table1">
          <p>ISSUE</p>
          <p>YEAR</p>
        </div>
      </div>
      <div className="a2">
      <p
          style={{
            fontSize: "22px",
            lineHeight: "1.41em",
            fontWeight: "bold",
            color: "#3a54b4",
          }}
        >
          Current Publication
        </p>
        <div className="table1">
          <p>ISSUE</p>
          <p>YEAR</p>
        </div>
      </div>
    </div>
  );
};

export default As;
