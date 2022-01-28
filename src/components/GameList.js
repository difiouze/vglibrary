import React from 'react'
import Game from './Game'

const GameList = ({games}) => {
    return (
        <div>
            <div className="game-container">
            {games.map((game) => 
              <Game game={game} key={game.id}/>
            )}
            </div>
        </div>
    )
}

export default GameList

 



