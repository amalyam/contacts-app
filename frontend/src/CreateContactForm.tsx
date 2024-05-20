import React, { useState, useEffect } from "react";
import { Contact, CreateContactFormProps } from "./types/Contact";

export default function CreateContactForm({
  existingContact,
  updateCallback,
}: CreateContactFormProps) {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    if (existingContact) setContactData(existingContact);
  }, [existingContact]);

  let updating = false;
  let url = "";

  if (existingContact) {
    updating = Object.entries(existingContact).length !== 0;
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (existingContact && updating) {
      url =
        "http://127.0.0.1:5000/" +
        (updating ? `update_contact/${existingContact.id}` : "create_contact");
    }

    const options = {
      method: updating ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    };
    const response = await fetch(url, options);
    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json();
      alert(data.message);
    } else {
      updateCallback();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactData({
      ...contactData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form className="pr-8" onSubmit={onSubmit}>
      <div className="ml-1 ">
        <div className="flex flex-col items-start m-3">
          <label htmlFor="firstName">First name</label>
          <input
            className="border border-cyan-800 rounded-lg w-full pl-2"
            type="text"
            id="firstName"
            value={contactData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-start m-3">
          <label htmlFor="lastName">Last name</label>
          <input
            className="border border-cyan-800 rounded-lg w-full pl-2"
            type="text"
            id="lastName"
            value={contactData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-start m-3">
          <label htmlFor="email">Email</label>
          <input
            className="border border-cyan-800 rounded-lg w-full pl-2"
            type="email"
            id="email"
            value={contactData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <button
        className="block w-full bg-cyan-700 m-4 px-4 py-2 rounded-lg font-semibold shadow-lg text-white antialiased"
        type="submit"
      >
        {updating ? "Update" : "Create"}
      </button>
    </form>
  );
}
