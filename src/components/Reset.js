import React from 'react';

const Reset = props => {
  return (
    <div className="text-center reset">
      <button className="btn btn-success btn-block" type="button" onClick={props.resetGame()}>
        Reset Game
      </button>
    </div>
  );
}

export default Reset;