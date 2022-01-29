import React from 'react';

const Favorite = ({addedGame}) => {
  return <div>
      <span className="card-title mb-0">{addedGame.name}</span>
  </div>;
};

export default Favorite;
