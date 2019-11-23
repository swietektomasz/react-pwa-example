import React from 'react'

import './anime-card.css'

const AnimeCard = ({ anime }) => (
  <div className='anime-card'>
    <ol>
      <li>Title: {anime.title.userPreferred}</li>
      <li>Average score: {anime.averageScore}</li>
      <li>Started: {`${anime.startDate.day}.${anime.startDate.month}.${anime.startDate.year}`}</li>
      <li>
        Ended:{' '}
        {anime.endDate.day
          ? `${anime.endDate.day}.${anime.endDate.month}.${anime.endDate.year}`
          : 'Not ended'}
      </li>
    </ol>
  </div>
)

export default AnimeCard
