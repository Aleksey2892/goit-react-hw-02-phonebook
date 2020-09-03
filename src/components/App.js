import React, { Component } from 'react';

import ContactList from './ContactList/ContactList';

import { v4 as uuidv4 } from 'uuid';

import s from './styled';

const RESET_STATE_NAME = {
  name: '',
  number: '',
};

export default class App extends Component {
  state = {
    ...RESET_STATE_NAME,
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const id = uuidv4();

    if (name && number) {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            { name: name, number: number, id: id },
          ],
        };
      });
      this.resetName();
    }
  };

  handleChange = (e, type) => {
    this.setState({ [type]: e.target.value });
  };

  resetName = () => {
    this.setState({ ...RESET_STATE_NAME });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { name, number, contacts, filter } = this.state;
    const { handleSubmit, handleChange, getFilterContacts } = this;
    const filterContacts = getFilterContacts();

    return (
      <>
        <s.TitleH1>Phonebook</s.TitleH1>
        <s.Form onSubmit={handleSubmit}>
          <s.Label>
            Name
            <s.Input
              type="text"
              placeholder="Сontact name"
              value={name}
              onChange={e => handleChange(e, 'name')}
            />
          </s.Label>
          <s.Label>
            Number
            <s.Input
              type="text"
              placeholder="Сontact number"
              value={number}
              onChange={e => handleChange(e, 'number')}
            />
          </s.Label>

          <s.Button type="submit">Add contact</s.Button>
        </s.Form>

        <s.TitleH2>Contacts</s.TitleH2>
        <div>
          <p>Find contacts by name</p>
          <s.Input
            type="text"
            placeholder="Filter"
            value={filter}
            onChange={e => handleChange(e, 'filter')}
          />
        </div>
        <ul>
          {contacts.length > 0 ? (
            <ContactList contacts={filterContacts} />
          ) : (
            <li>No contacts</li>
          )}
        </ul>
      </>
    );
  }
}
