import React, { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { v4 as uuidv4 } from 'uuid';

import s from './styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    const { name, number } = contact;
    const id = uuidv4();

    const stopAdd = this.state.contacts.find(item => item.name === name);

    if (!stopAdd) {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            { name: name, number: number, id: id },
          ],
        };
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const { handleFilter, getFilterContacts, addContact } = this;

    const isShowContacts = contacts.length > 1;
    const filterContacts = getFilterContacts();

    return (
      <div>
        <s.TitleH1>Phonebook</s.TitleH1>
        <ContactForm onAddContact={addContact} />

        <s.TitleH2>Contacts</s.TitleH2>
        {isShowContacts && (
          <Filter filter={filter} handleChange={handleFilter} />
        )}

        <ul>
          {isShowContacts ? (
            <ContactList contacts={filterContacts} />
          ) : (
            <li>No contacts</li>
          )}
        </ul>
      </div>
    );
  }
}
