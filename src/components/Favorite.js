import React from "react";
import CloseButton from 'react-bootstrap/CloseButton'

const Favorite = ({ addedGame }) => {
  return (
      <div className="favorite-card" style={{ backgroundImage: `url(${addedGame.background_image})` }}>
        <CloseButton variant="white" onClick={() => console.log('Hello')} />
        <span className="card-title mb-0">{addedGame.name}</span>
      </div>
  );
};

export default Favorite;
