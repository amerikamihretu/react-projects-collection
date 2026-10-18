import { configureStore } from '@reduxjs/toolkit'
import watchlistReducer from '../redux/watchlistSlice'
import filtersReducer from '../redux/filtersSlice'
import searchReducer from '../redux/searchSlice'

export const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
    filters: filtersReducer,
    search: searchReducer,
  },
})
