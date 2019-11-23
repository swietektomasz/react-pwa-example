import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { animeList } from '../../client/queries'
import AnimeCard from '../../components/AnimeCard'

import './main-view.css'

function MainView () {
  const [animes, setAnimes] = useState([])
  const [search, setSearch] = useState('')
  const { data } = useQuery(animeList, { variables: { search } })

  useEffect(
    () => {
      if (data) {
        setAnimes(data.Page.ANIME)
      }
    },
    [data]
  )

  return (
    <div>
      <input
        name='search'
        value={search}
        onChange={event => setSearch(event.target.value)}
        type='text'
        placeholder='Search...'
      />
      <div className='viewContainer'>
        {animes.map(anime => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  )
}

export default MainView
