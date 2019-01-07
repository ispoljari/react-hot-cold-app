import React from 'react';

const Form = () => {
  const onSubmit = e => {
    e.preventDefault();
    const guessedNumber = e.target.elements.guess.value;
    console.log(guessedNumber);
  }


  return (
    <form onSubmit={e => onSubmit(e)}>
      <input type="number" name="guess" required/>
      <button type="submit">Guess</button>
    </form>
  );
}

export default Form;