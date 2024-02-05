import React from "react";

const Button = ({ buttonText, onClick ,bgcolor, textColor }) => {
  return (
    <button className="custom-button" style={{backgroundColor:bgcolor}} onClick={onClick}>
      <p style={{color:textColor}}>{buttonText}</p>
    </button>
  );
};

export default Button;
