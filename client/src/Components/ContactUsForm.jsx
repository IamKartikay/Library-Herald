import React, { useState, useContext } from "react";
import Context from "../context/StateContext";
import Button from "../Components/Button";

const ContactUsForm = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleMessageChange,
  } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/contact-us", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => alert("Email submission Successfull✔"))
      .catch((err) =>{ alert("Email submission unsuccessfull!"); console.log(err);});

    console.log(
      JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        message,
      })
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="contact-us">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          required={true}
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          required={true}
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <input
          type="email"
          required={true}
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="number"
          required={true}
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <textarea
          required={true}
          placeholder="Let us know what you need help with..."
          value={message}
          onChange={handleMessageChange}
        />
        <Button
          textColor={"white"}
          buttonText={"Submit"}
          bgcolor={"#3a54b4"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default ContactUsForm;
