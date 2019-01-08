import React from 'react';

const Form = props => {
  const onSubmit = e => {
    e.preventDefault();

    const guess = e.target.elements.guess.value;
    e.target.elements.guess.value = ''; // Clear input field after submit

    props.returnGuessToApp(guess);
  }
  
  return (
    <form className="text-center" onSubmit={e => onSubmit(e)}>
      <input className="form-control" type="number" name="guess" min="1" max="100" required/>
      <button className="btn btn-primary btn-block guess"type="submit">Guess</button>
    </form>
  );
}

export default Form;