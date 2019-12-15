import React, { useState } from 'react'

import AnimeCard from '../../components/AnimeCard'

import './main-view.css'
import { Filters } from '../../components/Filters'

function MainView () {
  const [animes, setAnimes] = useState([])

  return (
    <div>
      <Filters setAnimes={setAnimes} />
      <div className='viewContainer'>
        {animes.map(anime => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  )
}

export default MainView
