import { useState, useEffect } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (debouncedQuery.trim()) {
      onSearch(debouncedQuery.trim())
    } else {
      onSearch('')
    }
  }, [debouncedQuery, onSearch])

  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  )
}
