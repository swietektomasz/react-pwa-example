import React, { useState, useEffect } from 'react'

import AnimeCard from '../../components/AnimeCard'

import './main-view.css'
import { getAnimeList } from '../../client'

function MainView () {
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    getAnimeList().then(response => setAnimes(response.animes))
  }, [])

  console.log(animes)

  return (
    <div className='viewContainer'>
      {animes.map(anime => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  )
}

export default MainView
