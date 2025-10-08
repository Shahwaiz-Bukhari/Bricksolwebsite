"use client";

import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import "./homenewsletter.css";

const HomeNewsLetter = ({ onSubmit, onClose, fromCalculator }) => {
  const [isVisible, setIsVisible] = useState(true); // State to track visibility
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new FormData object
    const newFormData = new FormData();
    newFormData.append("email", formData.email);
    newFormData.append("name", formData.name);

    newFormData.append("access_key", "bc9d075e-cc44-496c-85e1-f3c383030a9a");

    // Function to handle the form submission and return a promise for toast
    const promise = () =>
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: newFormData, // Send FormData directly
      }).then(async (response) => {
        const result = await response.json();
        if (result.success) {
          setFormData({
            name: "",
            email: "",
          });
          onClose(); // Close modal after successful submission
          onSubmit(); // Call the onSubmit prop after successful submission
          return { name: "Form" };
        } else {
          throw new Error("Submission failed");
        }
      });

    // Trigger the toast promise
    toast.promise(promise, {
      loading: "Submitting...",
      success: (data) => `${data.name} submitted successfully!`,
      error: "Oops! Something went wrong. Please try again.",
    });
  };

  // Handle close button click
  const handleClose = () => {
    setIsVisible(false); // Hide the section when the close button is clicked
    onClose(); // Call the onClose prop
  };

  if (!isVisible) return null; // If not visible, return null to hide the component

  return (
    <section className="homeNewsLetterSectionContainer">
      <div className="homeNewsLetterSectionSubContainer">
        <div className="homeNewsLetterSectionSubSubContainer">
          <div className="homeNewsLetterSectionSubSubSubContainer">
            <div className="homeNewsLetterSectionLeftContainer">
              {fromCalculator === "yes" ? (
                <h2>Custom Price Calculation</h2>
              ) : (
                <h2>Join the Bricksol wishlist</h2>
              )}

              {fromCalculator === "yes" ? (
                <p>
                  This model is provided for your use to estimate the potential
                  price. This model is NOT inclusive of all fee types or revenue
                  types.Please not that the downloadable CVS models will
                  notnecessarily match the above results as they contain
                  additional variables
                  <br />
                  <br />
                  <img
                    src={"/images/calculator/document.png"}
                    alt="document Png"
                    className="h-6 w-6 inline-block  mr-2" style={{width: "30px"}}
                  />
                  File type : <strong>CSV</strong>
                </p>
              ) : (
                <p>
                  Be the first to learn more, and implement next-generation
                  websites and marketing strategies in your real estate and 3D
                  projects. Join the wishlist and be the first to know about our
                  product launch and special offers.
                </p>
              )}
            </div>
            <div className="homeNewsLetterSectionRightContainer">
              {fromCalculator === "yes" ? (
                <h5>Fill out the form to download</h5>
              ) : (
                <h5>Fill out the form</h5>
              )}
              <form className="mt-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <div className="homeNewsLetterSectionRightContainerButtonContainer">
                  <button type="submit">
                    {fromCalculator === "yes" ? (
                      <span>Download</span>
                    ) : (
                      <span>Join the wishlist</span>
                    )}
                  </button>
                </div>
              </form>

              {fromCalculator === "yes" ? (
                <p>
                  By submitting this form, you agree that your data will be sent
                  to info@bricksol.net and read by our team. We will respond
                  promptly, and your information will never be shared with third
                  parties or used for spam. if you need to remove your data or
                  submitted the form in error, please contact us at
                  info@bricksol.net{" "}
                </p>
              ) : (
                <p>
                  I hereby consent to the transmission of my data, via this
                  form, to info@bricksol.net, where it will be reviewed by
                  authorized personnel. We are committed to providing a prompt
                  response to your inquiry. In the event that this form has been
                  submitted erroneously or you wish to retract your data, please
                  communicate your request by sending an email to
                  info@bricksol.net. Be assured that we uphold strict privacy
                  standards and will neither disseminate your data to third
                  parties nor inundate you with unsolicited correspondence.
                </p>
              )}
            </div>
          </div>
          <button
            className="homeNewsLetterSectionCloseButton"
            onClick={handleClose}
          >
            <img src={"/images/calculator/close_popup.svg"} alt="close-popup" />
          </button>
        </div>
      </div>
      {/* Toaster for notifications */}
      <Toaster
        toastOptions={{
          style: { backgroundColor: "rgb(0, 250, 255)", color: "white" },
        }}
      />
    </section>
  );
};

export { HomeNewsLetter };
