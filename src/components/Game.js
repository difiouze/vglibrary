import React from "react";
import Button from 'react-bootstrap/Button'

const Game = ({ game, addFavorite }) => {
  return (
    <div
      className="card my-3"
      style={{ backgroundImage: `url(${game.background_image})` }}
    >
      {/* <img className="card-img-top" src={game.background_image} alt="movie"></img> */}
      <div className="card-description py-2">
        <div className="card-title__wrapper">
          <h2 className="card-title mb-0">{game.name}</h2>
        </div>
        <ul className="genres">
          {game.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <h4 className="rating">Rating: {game.rating}</h4>
        <Button onClick={() => addFavorite(game)} variant="primary" size="sm">Add to Favorite</Button>
      </div>
    </div>
  );
};

export default Game;