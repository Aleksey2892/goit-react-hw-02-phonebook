import React from 'react';

import s from '../styled';

const Filter = ({ ...props }) => {
  const { filter, handleChange } = props;

  return (
    <div>
      <p>Find contacts by name</p>
      <s.Input
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={e => handleChange(e)}
      />
    </div>
  );
};

export default Filter;
