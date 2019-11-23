import { createReducer } from '@reduxjs/toolkit'

export const animeReducer = createReducer([], {
  GET_ANIME: (state, action) => {
    state.push(action.payload)
  }
})
