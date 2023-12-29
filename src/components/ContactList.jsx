import React from 'react';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} id={contact.id}>
            {contact.name}:{contact.number}
            <button onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ContactList };
