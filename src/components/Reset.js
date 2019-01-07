import React from 'react';

const Reset = props => {
  return (
    <button type="button" onClick={props.resetGame()}>Reset Game</button>
  );
}

export default Reset;