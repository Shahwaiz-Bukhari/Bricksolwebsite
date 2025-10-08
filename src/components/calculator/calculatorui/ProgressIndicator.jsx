import React from "react";
import "./calculatorui.css";

const ProgressIndicator = ({ steps, highlightedIndex, scrollToSection }) => {
  return (
    <section className="calculatorProgressIndicatorContainer">
      <div className="calculatorProgressIndicatorSubContainer">
        <div className="calculatorProgressIndicatorSubSubContainer">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="calculatorProgressIndicatorEntityContainer"
            >
              <div className="calculatorProgressIndicatorEntityDiv1">
                <span style={{ display: step.error ? "block" : "none" }}>
                  Missing fields 
                </span>
              </div>
              <div className="calculatorProgressIndicatorEntityDotContainer">
                <span
                  className={`calculatorProgressIndicatorEntityDot ${
                    index === highlightedIndex ? "active" : ""
                  }`}
                ></span>
                {index < steps.length - 1 && (
                  <div
                    className={`calculatorProgressIndicatorEntityLine ${
                      index < highlightedIndex ? "active" : ""
                    }`}
                  ></div>
                )}
              </div>
              <button
                onClick={() => scrollToSection(step.id)}
                className={`calculatorProgressIndicatorEntityName ${
                  highlightedIndex === index ? "active" : ""
                }`}
              >
                {step.name}
              </button>
              <div
                className={`calculatorProgressIndicatorEntityPrice ${
                  highlightedIndex === index ? "active" : ""
                }`}
              >
                {step.price}
              </div>
              <span className="calculatorProgressIndicatorEntityMobile" onClick={() => scrollToSection(step.id)}>
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProgressIndicator };
