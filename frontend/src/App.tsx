import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch(process.env.REACT_APP_API_URL + "/contacts");
    const data = await response.json();
    setContacts(data.contacts);
    console.log(data.contacts);
  };
  return <ContactList contacts={contacts} />;
}

export default App;
