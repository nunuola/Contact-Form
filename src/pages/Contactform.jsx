import React from "react";
import "./ContactForm.css";

const Contactform = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Contact Us</h2>
      <form className="form">
        <div className="name-container">
          <div>
            <label htmlFor="firstName" className="form-label">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-input"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="form-label">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-input"
              required
            />
          </div>
        </div>

        <label htmlFor="email" className="form-label">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          required
        />

        <label className="form-label">Query Type *</label>
        <div className="query-type-container">
          <label className="checkbox-label">
            <input
              type="radio"
              name="queryType"
              value="general"
              className="form-radio"
              required
            />
            General Enquiry
          </label>
          <label className="checkbox-label">
            <input
              type="radio"
              name="queryType"
              value="support"
              className="form-radio"
              required
            />
            Support Request
          </label>
        </div>

        <label htmlFor="message" className="form-label">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          required
        ></textarea>

        <label>
          <input type="checkbox" className="form-checkbox" required />I consent
          to being contacted by the team *
        </label>

        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contactform;
