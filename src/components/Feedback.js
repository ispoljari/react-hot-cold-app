import React from 'react';
import './Feedback.css';

const Feedback = props => {
  return (
    <div className="feedback">
      <h2 className="text-center feedback__value">{props.feedback}</h2>
    </div>
  );
}

export default Feedback;