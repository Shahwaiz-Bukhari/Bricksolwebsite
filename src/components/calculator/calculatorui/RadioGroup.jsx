"use client";

import React, { useState } from "react";
import "./calculatorui.css";
import { RadioButton } from "./RadioButton";

const RadioGroup = ({ title, options, selectedValue, onChange, help }) => {
  const [isHelpVisible, setIsHelpVisible] = useState(false);

  const handleMouseEnter = () => setIsHelpVisible(true);
  const handleMouseLeave = () => setIsHelpVisible(false);
  const handleClick = () => setIsHelpVisible((prev) => !prev);

  return (
    <div className="calculatorMainSectionHouseOptionsAbout3dModelsContainer">
      <div className="calculatorMainSectionHouseOptionsHeadingContainer">
        <div className="calculatorMainSectionHouseOptionsHeadingSubContainer">
          <h6>{title}</h6>
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
                  {help.image2 && help.haveSvg === "no-svg" ? (
                    <div className="calculatorMainSectionHouseOptionsHelpInfoImageDiv">
                      <img
                        src={help.image2}
                        alt="Help Info Image"
                        className="calculatorMainSectionHouseOptionsHelpInfoImage calculatorMainSectionHouseOptionsHelpInfoImageDivNoSvg"
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                  <div className="calculatorMainSectionHouseOptionsHelpInfoDiv">
                    <p>{help.text}</p>
                  </div>
                </div>
              )}
            </span>
          )}
        </div>
      </div>

      <div className="calculatorMainSectionHouseOptionsAbout3dModelsRadioContainer">
        {options.map((option) => (
          <RadioButton
            key={option.value}
            name={option.name}
            value={option.value}
            label={option.label}
            selectedValue={selectedValue}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export { RadioGroup };
