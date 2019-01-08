import React from 'react';

const Info = () => {
  const toggleInfo = () => {
    //something
  }

  return (
    <div className="text-center info">
      <button className="btn btn-info btn-block" type="button" onClick={toggleInfo()}>
        How To Play
      </button>
    </div>
  );
}

export default Info;