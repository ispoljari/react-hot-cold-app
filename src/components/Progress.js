import React from 'react';

const Progress = props => {
  return (
    <div>
      <h2 className="text-center">Guess #{props.attempt}</h2>
      <ul>
        {props.guessList}
      </ul>
    </div>
  );
}

export default Progress;