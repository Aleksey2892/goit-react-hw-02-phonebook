// import React from 'react';
import styled from 'styled-components';

const TitleH1 = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const TitleH2 = styled(TitleH1)``;

const Form = styled.form`
  margin-bottom: 20px;
  padding: 10px;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid;
`;

const Button = styled.button`
  width: 150px;
  display: block;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: all, 0.2s;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const Input = styled.input`
  margin-bottom: 20px;
  text-align: center;

  &::placeholder {
    font-size: 14px;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const s = { TitleH1, TitleH2, Form, Button, Input, Label };
export default s;
