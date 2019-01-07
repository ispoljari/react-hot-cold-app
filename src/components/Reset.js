import React from 'react';

const Reset = props => {
  return (
    <div>
      <button type="button" onClick={props.resetGame()}>
        Reset Game
      </button>
    </div>
  );
}

export default Reset;