import React from 'react'
import Game from './Game'

const GameList = ({games, addFavorite}) => {
    return (
        <div>
            <div className="game-container">
            {games.map((game) => 
              <Game game={game} key={game.id} addFavorite={addFavorite}/>
            )}
            </div>
        </div>
    )
}

export default GameList

 



