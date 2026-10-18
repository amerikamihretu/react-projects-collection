import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  genre: 'All',
  year: 'All',
  sortBy: 'title',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGenre: (state, action) => { state.genre = action.payload },
    setYear: (state, action) => { state.year = action.payload },
    setSortBy: (state, action) => { state.sortBy = action.payload },
    resetFilters: (state) => {
      state.genre = 'All'
      state.year = 'All'
      state.sortBy = 'title'
    },
  },
})

export const { setGenre, setYear, setSortBy, resetFilters } = filtersSlice.actions
export default filtersSlice.reducer
