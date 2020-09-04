import React, { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

const TitleH1 = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;
const TitleH2 = styled(TitleH1)``;

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

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const id = uuidv4();

    const isCheckDuplicate = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase(),
    );

    !isCheckDuplicate
      ? this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            { name: name, number: number, id: id },
          ],
        }))
      : alert(`${name.toUpperCase()} is already in contacts`);
  };

  removeContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  handleFilter = value => {
    this.setState({ filter: value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const { handleFilter, getFilterContacts, addContact, removeContact } = this;

    const isShowFilter = contacts.length > 1;
    const isShowContacts = contacts.length > 0;
    const filterContacts = getFilterContacts();

    return (
      <div>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm onAddContact={addContact} />

        <TitleH2>Contacts</TitleH2>
        {isShowFilter && <Filter filter={filter} handleChange={handleFilter} />}

        <ul>
          {isShowContacts ? (
            <ContactList
              contacts={filterContacts}
              onRemoveContact={removeContact}
            />
          ) : (
            <li>No contacts</li>
          )}
        </ul>
      </div>
    );
  }
}
