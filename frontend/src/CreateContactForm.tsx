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
      <div className="flex flex-col items-start m-3">
        <label htmlFor="firstName">First name</label>
        <input
          className="border border-cyan-800 rounded-lg"
          type="text"
          id="firstName"
          value={contactData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col items-start m-3">
        <label htmlFor="lastName">Last name</label>
        <input
          className="border border-cyan-800 rounded-lg w-[75%]"
          type="text"
          id="lastName"
          value={contactData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col items-start m-3">
        <label htmlFor="email">Email</label>
        <input
          className="border border-cyan-800 rounded-lg"
          type="email"
          id="email"
          value={contactData.email}
          onChange={handleChange}
        />
      </div>
      <button
        className="block w-[75%] bg-cyan-700 m-4 px-4 py-2 rounded-lg font-semibold shadow-lg text-white antialiased"
        type="submit"
      >
        {updating ? "Update" : "Create"}
      </button>
    </form>
  );
}
