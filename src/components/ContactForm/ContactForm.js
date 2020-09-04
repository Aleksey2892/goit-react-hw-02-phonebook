import React, { Component } from 'react';

import s from '../styled';

const RESET_STATE_NAME = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  state = { ...RESET_STATE_NAME, name: '', number: '' };

  resetName = () => {
    this.setState({ ...RESET_STATE_NAME });
  };

  handleChange = (e, type) => {
    this.setState({ [type]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name && number) {
      const contact = { name: name, number: number };

      this.props.onAddContact(contact);
      this.resetName();
    }
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <>
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
      </>
    );
  }
}
