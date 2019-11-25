import React from 'react'

import './anime-card.css'

const AnimeCard = ({ anime }) => {
  return (
    <div className='anime-card'>
      <div className='anime-card-inner'>
        <div className='anime-card-front'>
          <img className='cover-image' src={anime.coverImage.large} alt='cover' />
        </div>
        <div className='anime-card-back'>
          <ul className='anime-card-description'>
            <li>
              <h1>{anime.title.userPreferred}</h1>
            </li>
            <li>
              <p>{anime.description}</p>
            </li>
            <li>Average score: {anime.averageScore}%</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AnimeCard
