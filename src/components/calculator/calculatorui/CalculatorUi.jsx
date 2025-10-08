"use client";

import React, { useRef, useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { ProgressIndicator } from "./ProgressIndicator";
import { BuildingOptions } from "./BuildingOptions";
import { Checkbox } from "./CheckBoxComponent";
import { RadioGroup } from "./RadioGroup";
import { CounterController } from "./CounterComponent";
import "./calculatorui.css";
import { apartment3dRepresentYesOrNo } from "./ApartmentData";
import { incrementValue, decrementValue } from "./ValueHelpers";
import {
  have3dEvironmentOrNot,
  have3dEvironmentFile,
  detailsOf3dPlotNeeded,
} from "./EnvironmentData";
import { heroSectionAnimation } from "./WebsiteData";
import { languageOptions } from "./WebsiteData";
import { HomeNewsLetter } from "../newsletter/HomeNewsLetter";

import {
  has3DModelsRadioOptions,
  fileFormatOptions,
  typeOfDocumentationOptions,
  buildingOptions,
} from "./BuildingData";

const CalculatorUi = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [downloadCSV, setDownloadCSV] = useState(false);
  const csvLinkRef = useRef(null);

  const handleNewsletterSubmit = () => {
    setFormSubmitted(true);
    setShowNewsletter(false);
    setDownloadCSV(true);
  };

  useEffect(() => {
    if (downloadCSV && csvLinkRef.current) {
      csvLinkRef.current.link.click();
      setDownloadCSV(false);
    }
  }, [downloadCSV]);

  const handleDownloadClick = (e) => {
    const isValid = fieldsAuthentication();
    if (!isValid) {
      e.preventDefault();
      return false;
    }

    if (!formSubmitted) {
      e.preventDefault();
      setShowNewsletter(true); // Show the newsletter form if not submitted
      return false;
    }

    setTimeout(() => {
      resetStates();
      console.log("States have been reset after 3 seconds.");
    }, 3000);

    console.log("You clicked the link. CSV download will proceed.");
  };

  const sectionRefs = {
    building: useRef(null),
    apartment: useRef(null),
    environment: useRef(null),
    website: useRef(null),
  };

  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const [buildingState, setBuildingState] = useState({
    selectedBuildingType: "",
    has3DModels: "",
    typeOfDocumentation: "",
    fileFormatOf3dModel: "",
    has3DAmenities: false,
    has3DModelsAddFeatures: 0,
    buildingCount: 2,
    uniqueBuildingCount: 1,
    error: false,
  });

  const additional3dAmenitiesHelp = {
    image: "/images/calculator/help.svg",
    image2: "/images/calculator/additional3dAmenitiesHelpImage2.svg",
    text: "Indicate whether you wish to display additional amenities both inside and outside the buildings, such as the lobby, playground, parking lot, etc. Non-3D modeled amenities will be shown separately",
  };

  const [apartmentState, setApartmentState] = useState({
    require3dModel: "",
    numberOfApartments: 0,
    numberOfUniqueApartments: 0,
    avgNumberOfRoomsInApartment: 0,
    error: false,
  });

  const req3DRepresntationOfApartHelp = {
    image: "/images/calculator/help.svg",
    image2: "/images/calculator/3dApartHeadingHelp.webp",
    haveSvg: "no-svg",
    text: "Apartments in 3D could be used for 360 panoramas, interior designer app, including top-view perspectives",
  };

  const overAllNoOfApartHelp = {
    image: "/images/calculator/help.svg",
    image2: "/images/calculator/overallNoOfApartHelp.svg",
    description: "e.g. 28+62+12 = 102 apartments",
    text: "Determine total number of all apartments across all buildings",
  };

  const noOfUniqueApartmentHelp = {
    image: "/images/calculator/help.svg",
    image2: "/images/calculator/uniqueApartHelp.svg",
    description: "e.g. 2 different type of apartments",
    text: "Specify the number of unique apartments; these will be used as prototypes for replicating similar units",
  };

  const avgNoOfApartmentHelp = {
    image: "/images/calculator/help.svg",
    image2: "/images/calculator/avgNoOfApartHelp.svg",
    description: "e.g. (4+3+1+3):4 = 3 rooms in average",
    text: "Select average number of rooms in each apartment that needs to be displayed",
  };

  const [environment, setEnvironmentState] = useState({
    haveEnvironmentModel: " ",
    has3dModelFilesOfEnv: " ",
    detailed3dPlotYouNeed: " ",
    error: false,
  });

  const envHeadingHelp = {
    image: "/images/calculator/help.svg",
    text: "Select whether you have a 3D model of the surrounding area to integrate with your buildings in the scene. If not needed, choose 'no'",
  };

  const webHighlightAnimationHelp = {
    image: "/images/calculator/help.svg",
    image2: "/images/calculator/avgNoOfApartHelp.svg",
    text: "e.g. Highlight animation",
  };

  const webFilteringHelp = {
    image: "/images/calculator/help.svg",
    image2: "/images/calculator/webFilteringHelp.svg",
    text: "Select whether you wish to add the filtering/sorting feature (by size, area, floor, etc.) to the list of items",
  };

  const webNumOfFilters = {
    image: "/images/calculator/help.svg",
    image2: "/images/calculator/webNumOfFilters.svg",
    description: "e.g. 3 filters added",
    text: "Select whether you wish to add the filtering/sorting feature (by size, area, floor, etc.) to the list of items",
  };

  const [website, setWebsiteState] = useState({
    highlightAnimation: false,
    filterOrSorting: false,
    numberOfFilters: 0,
    heroSectionAnimation: "",
    selectedLanguage: "english",
    error: false,
  });

  const resetStates = () => {
    setBuildingState({
      selectedBuildingType: "",
      has3DModels: "",
      typeOfDocumentation: "",
      fileFormatOf3dModel: "",
      has3DAmenities: false,
      has3DModelsAddFeatures: 0,
      buildingCount: 2,
      uniqueBuildingCount: 1,
    });

    setApartmentState({
      require3dModel: "",
      numberOfApartments: 0,
      numberOfUniqueApartments: 0,
      avgNumberOfRoomsInApartment: 0,
    });

    setEnvironmentState({
      haveEnvironmentModel: " ",
      has3dModelFilesOfEnv: " ",
      detailed3dPlotYouNeed: " ",
    });

    setWebsiteState({
      highlightAnimation: false,
      filterOrSorting: false,
      numberOfFilters: 0,
      heroSectionAnimation: "",
      selectedLanguage: "english",
    });

    setFormSubmitted(false);
  };

  const handleIncrementNumberOfFilters = () =>
    incrementValue(website, setWebsiteState, "numberOfFilters");

  const handleDecrementNumberOfFilters = () =>
    decrementValue(website, setWebsiteState, "numberOfFilters", 0);

  const handleIncrementNumberOfApartments = () =>
    incrementValue(apartmentState, setApartmentState, "numberOfApartments");

  const handleDecrementNumberOfApartments = () =>
    decrementValue(apartmentState, setApartmentState, "numberOfApartments", 0);

  const handleIncrementUniqueApartments = () =>
    incrementValue(
      apartmentState,
      setApartmentState,
      "numberOfUniqueApartments"
    );

  const handleDecrementUniqueApartments = () =>
    decrementValue(
      apartmentState,
      setApartmentState,
      "numberOfUniqueApartments",
      0
    );

  const handleIncrementRoomsInApartment = () =>
    incrementValue(
      apartmentState,
      setApartmentState,
      "avgNumberOfRoomsInApartment"
    );

  const handleDecrementRoomsInApartment = () =>
    decrementValue(
      apartmentState,
      setApartmentState,
      "avgNumberOfRoomsInApartment",
      0
    );

  const handleCheckboxChange = (name) => {
    if (name === "highlightAnimation" || name === "filterOrSorting") {
      setWebsiteState((prev) => ({
        ...prev,
        [name]: !prev[name],
      }));
    } else {
      setBuildingState((prev) => ({
        ...prev,
        has3DAmenities: !prev.has3DAmenities,
        has3DModelsAddFeatures: !prev.has3DAmenities
          ? 0
          : prev.has3DModelsAddFeatures,
      }));
    }
  };

  // Refactored increment and decrement for buildings
  const handleIncrementBuildingCount = () =>
    incrementValue(buildingState, setBuildingState, "buildingCount");

  const handleDecrementBuildingCount = () =>
    decrementValue(buildingState, setBuildingState, "buildingCount", 2);

  const handleIncrementUniqueBuildingCount = () =>
    incrementValue(buildingState, setBuildingState, "uniqueBuildingCount");

  const handleDecrementUniqueBuildingCount = () =>
    decrementValue(buildingState, setBuildingState, "uniqueBuildingCount", 1);

  const handleIncrement3DModelsAddFeatures = () =>
    incrementValue(buildingState, setBuildingState, "has3DModelsAddFeatures");

  const handleDecrement3DModelsAddFeatures = () =>
    decrementValue(
      buildingState,
      setBuildingState,
      "has3DModelsAddFeatures",
      0
    );

  // Log counts when they change

  useEffect(() => {
    if (website.filterOrSorting == false) {
      setWebsiteState((prev) => ({
        ...prev,
        numberOfFilters: 0,
      }));
    }

    if (website.heroSectionAnimation !== "") {
      setWebsiteState((prev) => ({
        ...prev,
        error: false,
      }));
    }
  }, [website.filterOrSorting, website.heroSectionAnimation]);

  useEffect(() => {
    if (
      buildingState.selectedBuildingType === "single-houses" ||
      buildingState.selectedBuildingType === "single-apartment-building"
    ) {
      if (
        buildingState.uniqueBuildingCount !== 1 ||
        buildingState.buildingCount !== 1
      ) {
        setBuildingState((prev) => ({
          ...prev,
          uniqueBuildingCount: 1,
          buildingCount: 1,
        }));
      }
    }

    const {
      selectedBuildingType,
      has3DModels,
      fileFormatOf3dModel,
      typeOfDocumentation,
    } = buildingState;
    if (
      selectedBuildingType.trim() !== "" && // Check for non-empty after trimming
      has3DModels !== ""
    ) {
      if (
        has3DModels === "yes" &&
        fileFormatOf3dModel.trim() !== "" // Also check trimmed value for fileFormatOf3dModel
      ) {
        setBuildingState((prev) => ({ ...prev, error: false }));
      } else if (
        has3DModels === "no" &&
        typeOfDocumentation.trim() !== "" // Also check trimmed value for typeOfDocumentation
      ) {
        setBuildingState((prev) => ({ ...prev, error: false }));
      }
    }
  }, [
    buildingState.selectedBuildingType,
    buildingState.has3DModels,
    buildingState.fileFormatOf3dModel,
    buildingState.typeOfDocumentation,
    buildingState.uniqueBuildingCount,
    buildingState.buildingCount,
  ]);

  useEffect(() => {
    if (apartmentState.require3dModel === "no3dApartment") {
      setApartmentState((prev) => ({
        ...prev,
        numberOfApartments: 0,
        numberOfUniqueApartments: 0,
        avgNumberOfRoomsInApartment: 0,
        error: false,
      }));
    } else if (apartmentState.require3dModel !== "") {
      setApartmentState((prev) => ({
        ...prev,
        error: false,
      }));
    }
  }, [apartmentState.require3dModel]);

  useEffect(() => {
    if (
      buildingState.has3DModels === "no" &&
      buildingState.fileFormatOf3dModel !== " "
    ) {
      setBuildingState((prev) => ({
        ...prev,
        fileFormatOf3dModel: " ",
      }));
    }

    if (
      buildingState.has3DModels === "yes" &&
      buildingState.typeOfDocumentation !== " "
    ) {
      setBuildingState((prev) => ({
        ...prev,
        typeOfDocumentation: " ",
      }));
    }
  }, [
    buildingState.has3DModels,
    buildingState.fileFormatOf3dModel,
    buildingState.typeOfDocumentation,
  ]);

  useEffect(() => {
    if (
      !buildingState.has3DAmenities &&
      buildingState.has3DModelsAddFeatures !== 0
    ) {
      setBuildingState((prev) => ({ ...prev, has3DModelsAddFeatures: 0 }));
    }
  }, [buildingState.has3DAmenities, buildingState.has3DModelsAddFeatures]);

  useEffect(() => {
    const {
      haveEnvironmentModel,
      detailed3dPlotYouNeed,
      has3dModelFilesOfEnv,
    } = environment;

    // Initialize a new state object to update
    const updatedState = { ...environment };

    // Reset detailed3dPlotYouNeed if a 3D environment model is present
    if (haveEnvironmentModel === "yesHave3dEnv") {
      updatedState.detailed3dPlotYouNeed = "";
    }

    // Reset has3dModelFilesOfEnv if no 3D environment model is present
    if (haveEnvironmentModel === "notHave3dEnv") {
      updatedState.has3dModelFilesOfEnv = "";
    }

    // Set error state based on conditions
    if (
      haveEnvironmentModel === "yesHave3dEnv" &&
      has3dModelFilesOfEnv.trim() !== ""
    ) {
      updatedState.error = false;
    } else if (
      haveEnvironmentModel === "notHave3dEnv" &&
      detailed3dPlotYouNeed.trim() !== ""
    ) {
      updatedState.error = false;
    }

    // Update the state with all changes at once
    setEnvironmentState(updatedState);
  }, [
    environment.haveEnvironmentModel,
    environment.detailed3dPlotYouNeed,
    environment.has3dModelFilesOfEnv,
  ]);

  const steps = [
    {
      id: "building",
      name: "Buildings",
      price: "$",
      error: buildingState.error,
    },
    {
      id: "apartment",
      name: "Units",
      price: "$",
      error: apartmentState.error,
    },
    {
      id: "environment",
      name: "Environment",
      price: "$",
      error: environment.error,
    },
    { id: "website", name: "Website", price: "$", error: website.error },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxIndex = -1;

        entries.forEach((entry) => {
          const index = steps.findIndex((step) => step.id === entry.target.id);
          if (index !== -1 && entry.intersectionRatio > 0.1 && index > maxIndex) {
            maxIndex = index;
          }
        });

        if (maxIndex !== -1) {
          setHighlightedIndex(maxIndex);
        }
      },
      {
        threshold: 0.1,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const scrollToSection = (id) => {
    sectionRefs[id].current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const csvData = [
    ["Bricksol"],
    [""],
    ["Price Estimation"],
    [""],
    [""],
    ["Buildings Data"],
    ["Building Type Selected", buildingState.selectedBuildingType],
    ...(buildingState.selectedBuildingType === "multiple-houses" ||
    buildingState.selectedBuildingType === "multiple-apartment-building"
      ? [
          ["Overall number of buildings", buildingState.buildingCount],
          [
            "Overall number of unique buildings",
            buildingState.uniqueBuildingCount,
          ],
        ]
      : []),
    ["Do you have 3D models of your buildings?", buildingState.has3DModels],
    ...(buildingState.has3DModels === "yes"
      ? [
          [
            "What type of documentation do you need?",
            buildingState.fileFormatOf3dModel,
          ],
        ]
      : [
          [
            "What file format of 3D model do you need?",
            buildingState.typeOfDocumentation,
          ],
        ]),

    [
      "Additional 3D amenities inside and outside the building",
      buildingState.has3DAmenities ? "Yes" : "No",
    ],
    ...(buildingState.has3DAmenities
      ? [
          [
            "Number of additional features",
            buildingState.has3DModelsAddFeatures,
          ],
        ]
      : []),

    [""],
    [""],

    ["Units Data"],
    [
      "Do you require 3D representations of units?",
      apartmentState.require3dModel,
    ],
    ...(apartmentState.require3dModel === "yes3dApartment"
      ? [
          ["Overall number of units", apartmentState.numberOfApartments],
          ["Number of unique units", apartmentState.numberOfUniqueApartments],
          [
            "Average number of rooms in units",
            apartmentState.avgNumberOfRoomsInApartment,
          ],
        ]
      : []),

    [""],
    [""],
    ["Environment Data"],
    [
      "Do you have your own environment model?",
      environment.haveEnvironmentModel,
    ],
    ...(environment.haveEnvironmentModel === "yesHave3dEnv"
      ? [
          [
            "What type of documentation do you need?",
            environment.has3dModelFilesOfEnv,
          ],
        ]
      : [
          [
            "How detailed neighborhood do you need?",
            environment.detailed3dPlotYouNeed,
          ],
        ]),

    [""],
    [""],

    ["Website Data"],
    ["Highlight animation", website.highlightAnimation ? "Yes" : "No"],
    ["Filtering/Sorting", website.filterOrSorting ? "Yes" : "No"],
    ...(website.filterOrSorting
      ? [["Number of filters", website.numberOfFilters]]
      : []),
    ["Hero section animation", website.heroSectionAnimation],

    ["Selected Language: ", website.selectedLanguage],

    [""],
    [""],
    ["Total Price", "$"],

    [""],
    [""],
    ["This offer is just an average estimation, for full price contact us at:"],
    ["info@bricksol.net"],
    ["(+92) 301 1111 226"],
  ];

  const fieldsAuthentication = () => {
    let isValid = true; // Assume valid until proven otherwise

    if (buildingState.selectedBuildingType === "") {
      setBuildingState((prev) => ({ ...prev, error: true }));
      isValid = false; // Mark as invalid
    }
    if (
      buildingState.selectedBuildingType === "multiple-houses" ||
      buildingState.selectedBuildingType === "multiple-apartment-building"
    ) {
      if (buildingState.buildingCount < 1) {
        setBuildingState((prev) => ({ ...prev, error: true }));
        isValid = false; // Mark as invalid
      }
      if (buildingState.uniqueBuildingCount < 1) {
        setBuildingState((prev) => ({ ...prev, error: true }));
        isValid = false; // Mark as invalid
      }
    }
    if (buildingState.has3DModels === "yes") {
      if (buildingState.fileFormatOf3dModel === "") {
        setBuildingState((prev) => ({ ...prev, error: true }));
        isValid = false; // Mark as invalid
      }
    } else if (buildingState.has3DModels === "no") {
      if (buildingState.typeOfDocumentation === "") {
        setBuildingState((prev) => ({ ...prev, error: true }));
        isValid = false; // Mark as invalid
      }
    }
    if (buildingState.has3DModels === "") {
      setBuildingState((prev) => ({ ...prev, error: true }));
      isValid = false; // Mark as invalid
    }
    if (apartmentState.require3dModel === "") {
      setApartmentState((prev) => ({ ...prev, error: true }));
      isValid = false; // Mark as invalid
    }

    if (environment.haveEnvironmentModel === " ") {
      setEnvironmentState((prev) => ({ ...prev, error: true }));
      isValid = false; // Mark as invalid
    }
    if (environment.haveEnvironmentModel === "yesHave3dEnv") {
      if (environment.has3dModelFilesOfEnv === "") {
        setEnvironmentState((prev) => ({ ...prev, error: true }));
        isValid = false; // Mark as invalid
      }
    } else if (environment.haveEnvironmentModel === "notHave3dEnv") {
      if (environment.detailed3dPlotYouNeed === "") {
        setEnvironmentState((prev) => ({ ...prev, error: true }));
        isValid = false; // Mark as invalid
      }
    }
    if (website.heroSectionAnimation === "") {
      setWebsiteState((prev) => ({ ...prev, error: true }));
      isValid = false; // Mark as invalid
    }

    return isValid; // Return the validation result
  };

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#00060d",
      }}
    >
      <section className="calclulatorSectionHeadingContainer">
        <div className="calclulatorSectionHeadingSubContainer">
          <h1>Custom price calculator</h1>
          <h4>
            Reduce costs with pre-negotiated, transparent pricing. We don’t
            charge setup, monthly platform, or per MID fees. There’s no need for
            you to make any minimum commitments, and we won’t spring any
            surprises.
          </h4>
        </div>
      </section>
      <main>
        <ProgressIndicator
          steps={steps}
          highlightedIndex={highlightedIndex}
          scrollToSection={scrollToSection}
        />

        <section className="calculatorMainContentContainer">
          <div
            className="calculatorMainBuildingContentContainer calculatorMainSectionsContentContainer"
            ref={sectionRefs.building}
            id="building"
          >
            <div className="calculatorMainSectionHeadingContainerDiv">
              <h2>Buildings</h2>
            </div>
            <div className="calculatorMainSectionHouseOptionsContainer">
              <div className="calculatorMainSectionHouseOptionsHeadingContainer">
                <div className="calculatorMainSectionHouseOptionsHeadingSubContainer">
                  <h6>Select investment type</h6>
                </div>
              </div>

              <BuildingOptions
                buildingOptions={buildingOptions}
                selectedBuildingType={buildingState.selectedBuildingType}
                setSelectedBuildingType={(value) =>
                  setBuildingState((prev) => ({
                    ...prev,
                    selectedBuildingType: value,
                  }))
                }
              />
            </div>

            {(buildingState.selectedBuildingType === "multiple-houses" ||
              buildingState.selectedBuildingType ===
                "multiple-apartment-building") && (
              <>
                <CounterController
                  label="Overall number of buildings"
                  value={buildingState.buildingCount}
                  onIncrement={handleIncrementBuildingCount}
                  onDecrement={handleDecrementBuildingCount}
                />

                <CounterController
                  label="Overall number of unique buildings"
                  value={buildingState.uniqueBuildingCount}
                  onIncrement={handleIncrementUniqueBuildingCount}
                  onDecrement={handleDecrementUniqueBuildingCount}
                />
              </>
            )}

            {/* Using RadioGroup for 3D models */}
            <RadioGroup
              title="Do you have 3D models of your buildings?"
              options={has3DModelsRadioOptions}
              selectedValue={buildingState.has3DModels}
              onChange={(value) =>
                setBuildingState((prev) => ({ ...prev, has3DModels: value }))
              }
            />

            {buildingState.has3DModels === "no" && (
              <RadioGroup
                title="What type of documentation do you need?"
                options={typeOfDocumentationOptions}
                selectedValue={buildingState.typeOfDocumentation}
                onChange={(value) =>
                  setBuildingState((prev) => ({
                    ...prev,
                    typeOfDocumentation: value,
                  }))
                }
              />
            )}

            {buildingState.has3DModels === "yes" && (
              <RadioGroup
                title="What type of documentation do you need?"
                options={fileFormatOptions}
                selectedValue={buildingState.fileFormatOf3dModel}
                onChange={(value) =>
                  setBuildingState((prev) => ({
                    ...prev,
                    fileFormatOf3dModel: value,
                  }))
                }
              />
            )}

            <Checkbox
              label="Additional 3D amenities inside and outside the building"
              checked={buildingState.has3DAmenities}
              onChange={handleCheckboxChange}
              help={additional3dAmenitiesHelp}
            />
            {buildingState.has3DAmenities && (
              <CounterController
                label="Number of additional features"
                value={buildingState.has3DModelsAddFeatures}
                onIncrement={handleIncrement3DModelsAddFeatures}
                onDecrement={handleDecrement3DModelsAddFeatures}
              />
            )}
          </div>

          <div
            className="calculatorMainApartmentContentContainer calculatorMainSectionsContentContainer"
            ref={sectionRefs.apartment}
            id="apartment"
          >
            <div className="calculatorMainSectionHeadingContainerDiv">
              <h2>Units</h2>
            </div>

            <RadioGroup
              title="Do you require 3D representations of units?"
              options={apartment3dRepresentYesOrNo}
              selectedValue={apartmentState.require3dModel}
              onChange={(value) =>
                setApartmentState((prev) => ({
                  ...prev,
                  require3dModel: value, // Correctly updating the apartmentState
                }))
              }
              help={req3DRepresntationOfApartHelp}
            />

            {apartmentState.require3dModel === "yes3dApartment" && (
              <>
                <CounterController
                  label="Overall number of units"
                  value={apartmentState.numberOfApartments}
                  onIncrement={handleIncrementNumberOfApartments}
                  onDecrement={handleDecrementNumberOfApartments}
                  help={overAllNoOfApartHelp}
                />

                <CounterController
                  label="Number of unique units"
                  value={apartmentState.numberOfUniqueApartments}
                  onIncrement={handleIncrementUniqueApartments}
                  onDecrement={handleDecrementUniqueApartments}
                  help={noOfUniqueApartmentHelp}
                />

                <CounterController
                  label="Average number of rooms in units"
                  value={apartmentState.avgNumberOfRoomsInApartment}
                  onIncrement={handleIncrementRoomsInApartment}
                  onDecrement={handleDecrementRoomsInApartment}
                  help={avgNoOfApartmentHelp}
                />
              </>
            )}
          </div>

          <div
            className="calculatorMainEnvironmentContentContainer calculatorMainSectionsContentContainer"
            ref={sectionRefs.environment}
            id="environment"
          >
            <div className="calculatorMainSectionHeadingContainerDiv">
              <h2>Environment</h2>
            </div>

            <RadioGroup
              title="Do you have yor own environment model?"
              options={have3dEvironmentOrNot}
              selectedValue={environment.haveEnvironmentModel}
              onChange={(value) =>
                setEnvironmentState((prev) => ({
                  ...prev,
                  haveEnvironmentModel: value,
                }))
              }
              help={envHeadingHelp}
            />

            {environment.haveEnvironmentModel == "yesHave3dEnv" && (
              <RadioGroup
                title="What type of documentation do you need?"
                options={have3dEvironmentFile}
                selectedValue={environment.has3dModelFilesOfEnv}
                onChange={(value) =>
                  setEnvironmentState((prev) => ({
                    ...prev,
                    has3dModelFilesOfEnv: value,
                  }))
                }
              />
            )}

            {environment.haveEnvironmentModel == "notHave3dEnv" && (
              <div className="calculatorMainSectionHouseOptionsContainer">
                <div className="calculatorMainSectionHouseOptionsHeadingContainer">
                  <div className="calculatorMainSectionHouseOptionsHeadingSubContainer">
                    <h6>How detailed neighborhood do you need?</h6>
                  </div>
                </div>

                <BuildingOptions
                  buildingOptions={detailsOf3dPlotNeeded}
                  selectedBuildingType={environment.detailed3dPlotYouNeed}
                  setSelectedBuildingType={(value) =>
                    setEnvironmentState((prev) => ({
                      ...prev,
                      detailed3dPlotYouNeed: value,
                    }))
                  }
                />
              </div>
            )}
          </div>

          <div
            className="calculatorMainWebsiteContentContainer calculatorMainSectionsContentContainer"
            ref={sectionRefs.website}
            id="website"
          >
            <div className="calculatorMainSectionHeadingContainerDiv">
              <h2>Website</h2>

              <Checkbox
                label="Highlight animation"
                checked={website.highlightAnimation}
                onChange={() => handleCheckboxChange("highlightAnimation")}
                help={webHighlightAnimationHelp}
              />

              <Checkbox
                label="Filtering/Sorting"
                checked={website.filterOrSorting}
                onChange={() => handleCheckboxChange("filterOrSorting")}
                help={webFilteringHelp}
              />

              {website.filterOrSorting && (
                <CounterController
                  label="Number of filters"
                  value={website.numberOfFilters}
                  onIncrement={handleIncrementNumberOfFilters}
                  onDecrement={handleDecrementNumberOfFilters}
                  help={webNumOfFilters}
                />
              )}

              <RadioGroup
                title="Hero section animation"
                options={heroSectionAnimation}
                selectedValue={website.heroSectionAnimation}
                onChange={(value) =>
                  setWebsiteState((prev) => ({
                    ...prev,
                    heroSectionAnimation: value,
                  }))
                }
              />

              <RadioGroup
                title="Select language"
                options={languageOptions}
                selectedValue={website.selectedLanguage}
                onChange={(value) =>
                  setWebsiteState((prev) => ({
                    ...prev,
                    selectedLanguage: value,
                  }))
                }
              />
            </div>
          </div>
        </section>
        <div className="calculatorPageButtonContainer">
          <div className="calculatorPageButtonSubContainer">
            <div className="calculatorPagePriceContainer">
              <h6>Total</h6>
              <h2>$</h2>
            </div>

            <div className="calculatorPageButtonContentContainer">
              <CSVLink
                data={csvData}
                filename="bricksol_price_estimation"
                onClick={handleDownloadClick}
                ref={csvLinkRef}
              >
                <button className="calculatorPageButton">
                  Submit and download
                  <span>
                    <svg>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        ></path>
                      </svg>
                    </svg>
                  </span>
                </button>
              </CSVLink>
              {showNewsletter && (
                <HomeNewsLetter
                  onSubmit={handleNewsletterSubmit}
                  onClose={() => setShowNewsletter(false)}
                  fromCalculator={"yes"}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { CalculatorUi };
