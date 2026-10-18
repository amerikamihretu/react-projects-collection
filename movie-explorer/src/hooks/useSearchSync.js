import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export function useSearchSync() {
  const history = useSelector((state) => state.search.history)

  useEffect(() => {
    try {
      localStorage.setItem('searchHistory', JSON.stringify(history))
    } catch (e) {}
  }, [history])
}
