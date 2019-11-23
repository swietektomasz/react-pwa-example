import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { animeList } from '../../client/queries'
import AnimeCard from '../../components/AnimeCard'

import './main-view.css'

function MainView () {
  const [animes, setAnimes] = useState([])
  const { data } = useQuery(animeList)

  useEffect(
    () => {
      if (data) {
        setAnimes(data.Page.ANIME)
      }
    },
    [data]
  )

  return (
    <div className='viewContainer'>
      {animes.map(anime => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  )
}

export default MainView
