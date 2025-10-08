"use client";

import React from "react";
import "./calculatorui.css"

const RadioButton = ({ label, value, name, selectedValue, onChange }) => {
  return (
    <label
      className={`calculatorMainSectionHouseOptionsBuildingsLabel calculatorMainSectionHouseOptionsRadioLabel ${
        selectedValue === value ? "selected" : ""
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
      />
      <div className="calculatorMainSectionHouseOptionsContent calculatorMainSectionHouseOptionsContentRadio">
        <p>{label}</p>
      </div>
    </label>
  );
};

export { RadioButton };
