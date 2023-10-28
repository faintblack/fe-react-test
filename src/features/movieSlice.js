import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [
    {
      title: 'Test Title 1',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
    {
      title: 'Test Title 2',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 5,
    },
    {
      title: 'Test Title 3',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
    {
      title: 'Test Title 5',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: '10/30/2023',
      rating: 2,
    },
    {
      title: 'Test Title 4',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
    {
      title: 'Test Title 6',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description 7',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
    {
      title: 'Test Title 7',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 5,
    },
    {
      title: 'Test Title 8',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
    {
      title: 'Test Title 9',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
    {
      title: 'Test Title 10',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
    {
      title: 'Test Title 11',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
    {
      title: 'Test Title 12',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
    {
      title: 'Test Title 13',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
    {
      title: 'Test Title 14',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 3,
    },
    {
      title: 'Test Title 15',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
    {
      title: 'Test Title 16',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
    {
      title: 'Test Title 17',
      thumbnail: '/src/img/panda-img.jpg',
      desc: 'This is description',
      date: (new Date()).toLocaleDateString(),
      rating: 2,
    },
  ],
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