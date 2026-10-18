import { useState, useEffect, useCallback, useRef } from 'react'

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const abortControllerRef = useRef(null)
  const cache = useRef({})

  const fetchData = useCallback(async () => {
    if (!url) {
      setData(null)
      setLoading(false)
      setError(null)
      return
    }

    if (cache.current[url]) {
      setData(cache.current[url])
      setLoading(false)
      return
    }

    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }
    abortControllerRef.current = new AbortController()

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(url, {
        ...options,
        signal: abortControllerRef.current.signal,
      })
      if (!response.ok) throw new Error('Network response was not ok')
      const json = await response.json()
      if (json.Response === 'False') throw new Error(json.Error || 'No results found')
      cache.current[url] = json
      setData(json)
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message)
      }
    } finally {
      setLoading(false)
    }
  }, [url, options])

  useEffect(() => {
    fetchData()
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [fetchData])

  return { data, loading, error }
}
