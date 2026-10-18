import { useSelector } from 'react-redux'
import MovieCard from '../components/movie/MovieCard'

export default function WatchlistPage() {
  const watchlist = useSelector((state) => state.watchlist.movies)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">Your watchlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {watchlist.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}
