import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export function useLocalStorageSync() {
  const watchlist = useSelector((state) => state.watchlist.movies)

  useEffect(() => {
    try {
      localStorage.setItem('watchlist', JSON.stringify(watchlist))
    } catch (e) {}
  }, [watchlist])
}
