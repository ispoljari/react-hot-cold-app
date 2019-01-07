import React from 'react';

const Progress = props => {
  return (
    <div>
      <h2>Guess #{props.attempt}</h2>
      <ul>
        {props.guessList}
      </ul>
    </div>
  );
}

export default Progress;