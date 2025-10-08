"use client"

import React, { useState } from "react";
import "./calculatorui.css";

const Checkbox = ({ label, checked, onChange, help }) => {
  const [isHelpVisible, setIsHelpVisible] = useState(false);

  const handleMouseEnter = () => setIsHelpVisible(true);
  const handleMouseLeave = () => setIsHelpVisible(false);
  const handleClick = () => setIsHelpVisible((prev) => !prev);

  return (
    <div className="calculatorMainSectionHouseOptionsAbout3dModelsContainerWithCounter">
      <div className="calculatorMainSectionHouseOptionsHeadingContainer">
        <div className="calculatorMainSectionHouseOptionsHeadingSubContainer">
          <h6>{label}</h6>

          {help && (
            <span
              className="calculatorMainSectionHouseOptionsHeadingHelpContainer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick} // Add click toggle functionality
            >
              {help.image && (
                <img
                  src={help.image}
                  alt="Help Icon"
                  className="calculatorMainSectionHouseOptionsHelpImage"
                />
              )}

              {/* Help Info Container */}
              {isHelpVisible && (
                <div className="calculatorMainSectionHouseOptionsHelpInfoContainer">
                  <div className="calculatorMainSectionHouseOptionsHelpInfoImageDiv">
                    <img
                      src={help.image2}
                      alt="Help Info Image"
                      className="calculatorMainSectionHouseOptionsHelpInfoImage"
                    />
                  </div>
                  <div className="calculatorMainSectionHouseOptionsHelpInfoDiv">
                    <p>{help.text}</p>
                  </div>
                </div>
              )}
            </span>
          )}
        </div>
      </div>
      <label
        className={`calculatorMainSectionHouseOptionsCheckButton${
          checked ? " checked" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className={checked ? "checked" : ""}></span>
      </label>
    </div>
  );
};

export { Checkbox };
