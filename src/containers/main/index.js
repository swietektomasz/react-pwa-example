import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { animeList } from '../../client/queries'
import AnimeCard from '../../components/AnimeCard'

import './main-view.css'
import { Filters } from '../../components/Filters'

function MainView () {
  const [animes, setAnimes] = useState([])
  const [filterVariables, setFilterVariables] = useState({ search: null })
  const { data } = useQuery(animeList, { variables: filterVariables })

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
      <Filters filters={filterVariables} setFilters={setFilterVariables} />
      <div className='viewContainer'>
        {animes.map(anime => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  )
}

export default MainView
