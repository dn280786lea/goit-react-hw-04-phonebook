import React, { useState, useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    console.log('app');
    console.log('Обновилось поле контакт');
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const handleDelete = deleteId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== deleteId)
    );
  };

  const handleSubmit = ({ name, number }) => {
    const isExist = contacts.some(contact => contact.name === name);

    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { name, number, id: nanoid() },
    ]);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="contact-form">
      <ContactForm handleSubmit={handleSubmit} />
      <h2 className="contact">Contacts</h2>
      <Filter handleFilter={handleFilter} filter={filter} />
      <ContactList
        filteredContacts={filteredContacts}
        onDelete={handleDelete}
      />
    </section>
  );
};

export default App;
