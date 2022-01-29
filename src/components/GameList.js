import React from 'react'
import Game from './Game'

const GameList = ({games, favorite}) => {
    return (
        <div>
            <div className="game-container">
            {games.map((game) => 
              <Game game={game} key={game.id} favorite={favorite}/>
            )}
            </div>
        </div>
    )
}

export default GameList

 



