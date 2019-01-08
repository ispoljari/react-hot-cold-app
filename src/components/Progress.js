import React from 'react';
import './Progress.css';

const Progress = props => {
  return (
    <div className="progressBar">
      <h2 className="text-center progressBar__current">Guess #{props.attempt}</h2>
      <ul className="progressBar__history">
        {props.guessList}
      </ul>
    </div>
  );
}

export default Progress;