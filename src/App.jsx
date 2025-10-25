import "./App.css";
import { nanoid } from "nanoid";
import { Hero } from "./components/Hero/Hero.jsx";

import { ContactList } from "./components/ContactList/ContactList.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

import { GlobalStyle } from "./GlobalStyles.js";
import { Main } from "./App.js";
import { useState, useEffect } from "react";

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      setContacts(JSON.parse(localStorage.getItem("contacts")));
    } else {
      localStorage.setItem(
        "contacts",
        JSON.stringify([
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ])
      );
    }
  }, []);

  const setNewFilter = (value) => {
    setFilter(value);
  };

  const filterNumber = () => {
    if (!filter) return contacts;

    const text = filter.toLowerCase();
    return contacts.filter((cont) => cont.name.toLowerCase().includes(text));
  };

  const addNumber = ({ name, number }) => {
    if (contacts.find((cont) => cont.name === name)) {
      alert(`Number ${name} is already in contacts`);
      return;
    }

    if (contacts.find((cont) => cont.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }
    setContacts([...contacts, { id: nanoid(8), name: name, number: number }]);
  };

  const deleteNumber = (e) => {
    setContacts(
      contacts.filter((cont) => e.target.parentElement.id !== cont.id)
    );
  };

  return (
    <Main className="App">
      <GlobalStyle />
      <Hero addNumber={addNumber} />
      <ContactList
        deleteNumber={deleteNumber}
        contacts={filterNumber()}
        filter={filter}
        onChange={setNewFilter}
        filterNumber={filterNumber}
      />
      <Footer />
    </Main>
  );
};

export default App;
