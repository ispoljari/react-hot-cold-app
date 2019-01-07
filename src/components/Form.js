import React from 'react';

const Form = props => {
  const onSubmit = e => {
    e.preventDefault();
    
    const guess = e.target.elements.guess.value;
    e.target.elements.guess.value = '';

    props.returnGuessToApp(guess);
  }


  return (
    <form onSubmit={e => onSubmit(e)}>
      <input type="number" name="guess" min="1" max="100" required/>
      <button type="submit">Guess</button>
    </form>
  );
}

export default Form;