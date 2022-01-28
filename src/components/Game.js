import React from "react";

const Game = ({ game }) => {
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
        <h3 className="rating">Rating: {game.rating}</h3>
      </div>
    </div>
  );
};

export default Game;
