import React from 'react';
import Favorite from './Favorite';

const Favorites = ({ favorite }) => {
  return (
    <div className='favorites-container'>
    <h2 className='favorites-title'>Favorite Games saved: {favorite.length}</h2>
    <div className='favorites-item-container'>
    {favorite.map((addedGame) => (
            <Favorite addedGame= {addedGame} key={addedGame.id}/>
        ))}
    </div>
    </div>
  )
};

export default Favorites;
