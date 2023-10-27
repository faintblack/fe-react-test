import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  colorMode: 'light'
}

export const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleColorMode: (state) => {
      state.colorMode = state.colorMode === 'light' ? 'dark' : 'light'
    },
  },
})

export const { toggleColorMode } = themeReducer.actions

export default themeReducer.reducer