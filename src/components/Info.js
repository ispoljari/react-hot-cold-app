import React from 'react';
import './Info.css';

const Info = () => {
  const toggleModalInfo = () => {
    //something
  }

  return (
    <div className="text-center info">
      <button className="btn btn-info btn-block info__btn" type="button" onClick={toggleModalInfo()}>
        How To Play
      </button>
    </div>
  );
}

export default Info;