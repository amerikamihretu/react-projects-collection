import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie, removeMovie } from '../../redux/watchlistSlice'
import { memo } from 'react'

const MovieCard = memo(({ movie }) => {
  const dispatch = useDispatch()
  const watchlist = useSelector((state) => state.watchlist.movies)
  const isInWatchlist = watchlist.some(m => m.imdbID === movie.imdbID)

  const handleWatchlistToggle = () => {
    if (isInWatchlist) {
      dispatch(removeMovie(movie.imdbID))
    } else {
      dispatch(addMovie(movie))
    }
  }

  const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition transform hover:scale-105">
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={poster} alt={movie.Title} className="w-full h-72 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">{movie.Title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{movie.Year}</p>
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button
          onClick={handleWatchlistToggle}
          className={`w-full py-2 rounded-lg transition ${
            isInWatchlist 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          }`}
        >
          {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
        </button>
      </div>
    </div>
  )
})

export default MovieCard
