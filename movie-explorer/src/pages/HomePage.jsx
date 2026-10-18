import { useState } from 'react'
import { useDispatch } from 'react-redux'
import SearchBar from '../components/movie/SearchBar'
import MovieList from '../components/movie/MovieList'
import SearchHistory from '../components/movie/SearchHistory'
import { useFetch } from '../hooks/useFetch'
import { searchMovies } from '../api/movieApi'
import { addSearch } from '../redux/searchSlice'

export default function HomePage() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const url = query ? searchMovies(query) : null
  const { data, loading, error } = useFetch(url)

  const handleSearch = (q) => {
    setQuery(q)
    if (q.trim()) {
      dispatch(addSearch(q))
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={handleSearch} />
      <SearchHistory onSearch={handleSearch} />
      {loading && <p className="text-center">Searching...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {data && data.Search && <MovieList movies={data.Search} />}
      {data && data.Response === 'False' && (
        <p className="text-center text-gray-500">No results found.</p>
      )}
    </div>
  )
}
