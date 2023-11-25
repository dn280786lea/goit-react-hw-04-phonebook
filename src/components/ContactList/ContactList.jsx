import { ContactItem } from 'components/ContactItem/ContactItem';
import React from 'react';
import './ContactList.css';

export const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <div className="contactlist-list">
      {filteredContacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
