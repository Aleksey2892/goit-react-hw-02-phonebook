import React from 'react';
import PropTypes from 'prop-types';

import s from '../../styled';

const ContactList = ({ contacts, onRemoveContact }) => {
  console.log(contacts);
  return contacts.map(({ id, name, number }) => (
    <s.liItem key={id}>
      {name}: {number}
      <s.BtnRemove type="button" onClick={() => onRemoveContact(id)}>
        Delete
      </s.BtnRemove>
    </s.liItem>
  ));
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,

  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
