import React from "react";
import CloseButton from "react-bootstrap/CloseButton";

const Favorite = ({ addedGame, favorite, setFavorite }) => {
  const removeItem = (addedGame) => {
    //console.log(addedGame);
    setFavorite(favorite.filter((el) => el.id !== addedGame.id));
  };

  return (
    <div
      className="favorite-card"
      style={{ backgroundImage: `url(${addedGame.background_image})` }}
    >
      <div className="favorite-blocktext">
        <CloseButton variant="white" onClick={() => removeItem(addedGame)} />
        <span className="card-title mb-0">{addedGame.name}</span>
      </div>
    </div>
  );
};

export default Favorite;
