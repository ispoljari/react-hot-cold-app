import React from 'react';
import styled from 'styled-components';
import { Input } from '@smooth-ui/core-sc';
import './Form.css';

const StyledForm = styled.form`
  margin-top: 10px;
`;

const Form = ({block, returnGuessToApp}) => {
  const onSubmit = e => {
    e.preventDefault();

    if (!block) {
      const guess = e.target.elements.guess.value;
      e.target.elements.guess.value = ''; // Clear input field after submit
  
      returnGuessToApp(guess);
    }
  }
  
  return (
    <StyledForm onSubmit={onSubmit}>
      <Input control type="number" textAlign="center" fontSize={22} minHeight={40} name="guess" min="1" max="100" placeholder="Enter your guess" required/>
      <button className="btn btn-primary btn-block form-game__btn"type="submit">
        Guess
      </button>
    </StyledForm>
  );
}

export default Form;