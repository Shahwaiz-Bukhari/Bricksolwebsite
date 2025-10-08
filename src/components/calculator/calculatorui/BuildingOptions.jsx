"use client";

import React from "react";
import "./calculatorui.css";

const BuildingOptions = ({
  buildingOptions,
  selectedBuildingType,
  setSelectedBuildingType,
}) => {
  return (
    <div className="calculatorMainSectionHouseOptionsBuildingsContainer">
      {buildingOptions.map(({ value, imgSrc, labelText }) => (
        <label
          key={value}
          className={`calculatorMainSectionHouseOptionsBuildingsLabel ${
            selectedBuildingType === value ? "selected" : ""
          }`}
        >
          <input
            type="radio"
            name="buildingType"
            value={value}
            checked={selectedBuildingType === value}
            onChange={() => setSelectedBuildingType(value)}
          />
          <div className="calculatorMainSectionHouseOptionsContent">
            <img
              src={imgSrc}
              alt={labelText}
              className="calculator-building-image"
            />
            <p>{labelText}</p>
          </div>
        </label>
      ))}
    </div>
  );
};

export { BuildingOptions };
