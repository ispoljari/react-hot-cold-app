import React from 'react';
import './Reset.css';

const Reset = props => {
  return (
    <div className="text-center reset">
      <button className="btn btn-success btn-block reset__btn" type="button" onClick={props.resetGame()}>
        Reset Game
      </button>
    </div>
  );
}

export default Reset;