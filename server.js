const express = require('express')
const fetch = require('node-fetch')

const { query } = require('./queries.js')

const cors = require('cors')
const app = express()

const port = 4000
app.use(cors())

const url = 'https://graphql.anilist.co'
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    query: query
  })
}

app.get('/anime', (req, res) =>
  fetch(url, options)
    .then(handleResponse)
    .then(data => res.send(data))
    .catch(error => console.error(error))
)

function handleResponse (response) {
  return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json)
  })
}

app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`))
