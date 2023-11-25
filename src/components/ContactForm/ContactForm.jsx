import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const { name, number } = formData;
    handleSubmit({ name, number });
    setFormData({ name: '', number: '' });
  };

  return (
    <div className="phonebook-form">
      <form onSubmit={handleFormSubmit}>
        <h1 className="phonebook-title">Phonebook</h1>
        <div>
          <label className="phonebook-name" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label className="phonebook-number" htmlFor="number">
            Number
          </label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="namebtn">
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
