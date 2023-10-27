import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../features/movieSlice'
import themeReducer from '../features/themeSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    theme: themeReducer,
  },
})