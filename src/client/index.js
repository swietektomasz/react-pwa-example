const fetch = require('node-fetch')

export const getAnimeList = async () => {
  const response = await fetch('http://localhost:4000/anime').then(res => res.json())

  return { animes: response.data.Page.ANIME, page: response.data.pageInfo }
}
