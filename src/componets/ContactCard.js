import React, { useState } from "react";
import { validateEmail } from "./../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  // HANDLES FORM SUBMIT BUTTON
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // HANDLES CHANGES IN THE FORM INPUTS
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid. Please try again.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  return (
    <section className="sections contact">
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* NAME INPUT  */}
        <div>
          <label htmlFor="name">Name:</label>
          <br/>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        {/* EMAIL INPUT  */}
        <div>
          <label htmlFor="email">Email address:</label>
          <br/>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        {/* MESSAGE TEXT AREA */}
        <div>
          <label htmlFor="message">Message:</label>
          <br/>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;

