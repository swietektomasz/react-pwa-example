import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { AbilityControl } from 'react-ability'

import { animeList } from '../../client/queries'
import AnimeCard from '../../components/AnimeCard'

import './main-view.css'

function MainView () {
  const [animes, setAnimes] = useState([])
  const [search, setSearch] = useState(null)
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
      <AbilityControl permission='SEARCH'>
        <input
          name='search'
          value={search}
          onChange={event => setSearch(search ? null : event.target.value)}
          type='text'
          placeholder='Search...'
        />
      </AbilityControl>
      <div className='viewContainer'>
        {animes.map(anime => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  )
}

export default MainView
