import React, { useState } from "react";
import { Contact } from "./types/Contact";

export default function CreateContactForm({}) {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      contactData,
    };

    const url = "http://127.0.0.1:5000/create_contact";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json();
      alert(data.message);
    } else {
      // successful
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactData({
      ...contactData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={contactData.firstName}
          onChange={handleChange}
        />
      </div>
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={contactData.lastName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={contactData.email}
        onChange={handleChange}
      />
      <button type="submit">Create Contact</button>
    </form>
  );
}
