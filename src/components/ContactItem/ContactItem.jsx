import React from 'react';
import {} from './ContactItem.css';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <div className="contact-item">
      <span className="item">{name}: </span>
      <span className="item">{number}</span>
      <button className="deletebtn" type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
