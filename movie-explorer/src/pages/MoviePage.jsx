import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { getMovieDetails } from '../api/movieApi'

export default function MoviePage() {
  const { id } = useParams()
  const url = getMovieDetails(id)
  const { data: movie, loading, error } = useFetch(url)

  if (loading) return <p className="text-center mt-10">Loading...</p>
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>
  if (!movie || movie.Response === 'False') return <p className="text-center mt-10">Movie not found.</p>

  const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-indigo-600 dark:text-indigo-400 hover:underline mb-4 inline-block">&larr; Back</Link>
      <div className="flex flex-col md:flex-row gap-8">
        <img src={poster} alt={movie.Title} className="w-64 rounded-lg shadow-lg" />
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{movie.Title} ({movie.Year})</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">{movie.Genre} | {movie.Runtime} | {movie.Rated}</p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">{movie.Plot}</p>
          <div className="mt-6 space-y-2">
            <p><span className="font-semibold">Director:</span> {movie.Director}</p>
            <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
            <p><span className="font-semibold">IMDb Rating:</span> {movie.imdbRating}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
