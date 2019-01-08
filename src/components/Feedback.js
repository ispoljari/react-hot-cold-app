import React from 'react';
import './Feedback.css';

const Feedback = props => {
  const updateFeedback = () => {
    const absDiff = Math.abs(props.guess - props.actual)

    if (absDiff === 0) {
      return 'You Won! Reset the game to play again.';
    } else if (absDiff < 4) {
      return 'Extremely Hot!';
    } else if (absDiff >= 4 && absDiff < 10) {
      return 'Hot';
    } else if (absDiff >= 10 && absDiff < 20) {
      return 'Warm';
    } else if (absDiff >=20 ) {
      return 'Cold';
    } else {
      return 'Waiting...'
    }
  }

  return (
    <div className="feedback">
      <h2 className="text-center feedback__value">{updateFeedback()}</h2>
    </div>
  );
}

export default Feedback;