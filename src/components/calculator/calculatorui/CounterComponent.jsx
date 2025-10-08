"use client";

import "./calculatorui.css";
import React, { useState } from "react";

const CounterController = ({
  label,
  value,
  onIncrement,
  onDecrement,
  help,
}) => {
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
                    <p className="calculatorMainSectionHouseOptionsHelpInfoDescription">
                      {help.description}
                    </p>
                    <p>{help.text}</p>
                  </div>
                </div>
              )}
            </span>
          )}
        </div>
      </div>
      <div className="calculatorMainSectionHouseOptionCounterContainer">
        <button
          className="calculatorMainSectionHouseOptionCounterOptionIcon"
          onClick={onDecrement}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        </button>
        <div className="calculatorMainSectionHouseOptionCounterDisplayNumber">
          <input type="text" value={value} readOnly />{" "}
          {/* Ensure this is read-only */}
        </div>
        <button
          className="calculatorMainSectionHouseOptionCounterOptionIcon"
          onClick={onIncrement}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export { CounterController };
