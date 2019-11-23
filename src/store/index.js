import { configureStore } from '@reduxjs/toolkit'
import { animeReducer } from './animeReducer'

export const store = configureStore({ reducer: { anime: animeReducer } })
