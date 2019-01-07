import React from 'react';

const Feedback = props => {
  return (
    <div>
      <h2>Feedback Component</h2>
      <p>{props.currentGuess}</p>
    </div>
  );
}

export default Feedback;