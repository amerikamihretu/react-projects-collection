import { createSlice } from '@reduxjs/toolkit'

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('watchlist')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const initialState = {
  movies: loadFromLocalStorage(),
}

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const exists = state.movies.some(m => m.imdbID === action.payload.imdbID)
      if (!exists) {
        state.movies.push(action.payload)
      }
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(m => m.imdbID !== action.payload)
    },
    clearWatchlist: (state) => {
      state.movies = []
    },
  },
})

export const { addMovie, removeMovie, clearWatchlist } = watchlistSlice.actions
export default watchlistSlice.reducer
