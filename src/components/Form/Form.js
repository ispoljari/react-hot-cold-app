import React from 'react';
import { Input, Button } from '@smooth-ui/core-sc';
import * as Styled from './style';

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
    <Styled.Form onSubmit={onSubmit}>
      <Input width={1} type="number" textAlign="center" fontSize={22} minHeight={40} name="guess" min="1" max="100" placeholder="Enter your guess" required/>
      <Button variant="success" width={1} mt={10} minHeight={40} fontSize={22} type="submit">
        Guess
      </Button>
    </Styled.Form>
  );
}

export default Form;