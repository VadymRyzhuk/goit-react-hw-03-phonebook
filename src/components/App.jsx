import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value.trim() });
  };

  handleNumber = event => {
    this.setState({ number: event.target.value });
  };

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  onAddClick = event => {
    event.preventDefault();

    const isDuplicateName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );

    if (isDuplicateName) {
      alert(
        'This name is already in the phonebook. Please choose a different name.'
      );
      return;
    }

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    event.currentTarget.reset();
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const stringifiedFromContacts = localStorage.getItem('contacts');
    const contacts = JSON.parse(stringifiedFromContacts) ?? [];
    this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }
  }

  render() {
    const filteredName = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(this.state.filter.trim().toLowerCase())
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onAddClick={this.onAddClick}
          handleChange={this.handleChange}
          handleNumber={this.handleNumber}
        />
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactList
          contacts={filteredName}
          handleDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
