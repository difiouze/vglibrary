import React from "react";

const Favorite = ({ addedGame }) => {
  return (
      <div className="favorite-card" style={{ backgroundImage: `url(${addedGame.background_image})` }}>
        <span className="card-title mb-0">{addedGame.name}</span>
      </div>
  );
};

export default Favorite;
