import { createSlice } from '@reduxjs/toolkit'

const loadHistory = () => {
  try {
    const data = localStorage.getItem('searchHistory')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const initialState = {
  history: loadHistory(),
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearch: (state, action) => {
      const query = action.payload.trim()
      if (!query) return
      state.history = state.history.filter(q => q !== query)
      state.history.unshift(query)
      if (state.history.length > 10) state.history.pop()
    },
    clearHistory: (state) => {
      state.history = []
    },
    removeSearch: (state, action) => {
      state.history = state.history.filter(q => q !== action.payload)
    },
  },
})

export const { addSearch, clearHistory, removeSearch } = searchSlice.actions
export default searchSlice.reducer
