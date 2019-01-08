import React from 'react';
import './Info.css';

const Info = () => {
  const toggleInfo = () => {
    //something
  }

  return (
    <div className="text-center info">
      <button className="btn btn-info btn-block info__btn" type="button" onClick={toggleInfo()}>
        How To Play
      </button>
    </div>
  );
}

export default Info;