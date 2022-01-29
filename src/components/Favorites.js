import React from 'react';
import Favorite from './Favorite';

const Favorites = ({ favorite }) => {
  return (
    <div className='favorites-container'>
    <h2>Favorite Games saved:</h2>
    <div className='favorites-item-container'>
    {favorite.map((addedGame) => (
            <Favorite addedGame= {addedGame}/>
        ))}
    </div>
    </div>
  )
};

export default Favorites;
