import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import CreateContactForm from "./CreateContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
    console.log(data.contacts);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true);
  };

  return (
    <div>
      <ContactList contacts={contacts} />
      <button
        className="block w-[75%] bg-cyan-700 m-4 px-4 py-2 rounded-lg font-semibold shadow-lg text-white antialiased"
        onClick={openCreateModal}
      >
        Create New Contact
      </button>
      {isModalOpen && (
        <div className="flex items-center justify-center fixed z-10 inset-0 overflow-auto bg-black bg-opacity-40 w-full h-full">
          <div className="bg-white m-auto p-5 border border-gray-800 w-4/5 relative pt-10">
            <span
              className="text-gray-400 absolute top-0 right-3 text-4xl p-2 font-bold cursor-pointed"
              onClick={closeModal}
            >
              &times;
            </span>
            <CreateContactForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
