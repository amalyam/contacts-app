import React from "react";
import { Contact, ContactListProps } from "./types/Contact";

export default function ContactList({
  contacts,
  updateContact,
  updateCallback,
}: ContactListProps) {
  return (
    <div className="m-2 p-4">
      <h2 className="text-center my-4 font-semibold antialiased">Contacts</h2>
      {contacts && contacts.length > 0 ? (
        <table className="min-w-full table-auto">
          <thead className="justify-between">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td className="text-center">{contact.firstName}</td>
                  <td className="text-center">{contact.lastName}</td>
                  <td className="text-center">{contact.email}</td>
                  <td className="text-center">
                    <button
                      className="bg-emerald-500 rounded-lg m-2 px-4 py-2 font-semibold shadow-md text-slate-950"
                      onClick={() => updateContact(contact)}
                    >
                      Update
                    </button>
                    <button className="bg-red-700 rounded-lg m-2 px-4 py-2 font-semibold shadow-md text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="text-center">You don't have any contacts yet!</div>
      )}
    </div>
  );
}
