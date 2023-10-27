import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [{
    title: 'Test Title',
    thumbnail: '',
    desc: 'This is description',
    date: new Date().toLocaleDateString(),
    rating: 4,
  }],
  counter: 0
}

export const movieReducer = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.data = [...state.data, action.payload]
    },
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addMovie, increment, decrement, incrementByAmount } = movieReducer.actions

export default movieReducer.reducer