import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Input = styled.input`
  margin-bottom: 20px;
  text-align: center;

  &::placeholder {
    font-size: 14px;
  }
`;

const Filter = ({ ...props }) => {
  const { filter, handleChange } = props;

  const onChangeHandler = e => {
    const filterVaule = e.target.value;

    handleChange(filterVaule);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <Input
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={onChangeHandler}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
