import React, { useState } from "react";
import "../pages/archive.css";
import { AiOutlineDown } from "react-icons/ai";

const DropdownButton = ({ data, handleClick }) => {
  data.sort((a, b) => b - a);
  console.log(data);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown-container">
      <button onClick={handleToggleDropdown} className="dropdown-button">
        Please select a year <AiOutlineDown />
      </button>

      {isDropdownOpen && (
        <div className="dropdown-content">
          {data.map((e, i) => (
            <div className="dropdown-item" key={i} onClick={()=>handleClick(e)}>
              <p>{e}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
