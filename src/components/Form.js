import React from 'react';
import './Form.css'

const Form = props => {
  const onSubmit = e => {
    e.preventDefault();

    if (!props.block) {
      const guess = e.target.elements.guess.value;
      e.target.elements.guess.value = ''; // Clear input field after submit
  
      props.returnGuessToApp(guess);
    }
  }
  
  return (
    <form className="text-center form-game" onSubmit={e => onSubmit(e)}>
      <input className="form-control text-center form-game__input" type="number" name="guess" min="1" max="100" placeholder="Enter your guess" required/>
      <button className="btn btn-primary btn-block form-game__btn"type="submit">Guess</button>
    </form>
  );
}

export default Form;