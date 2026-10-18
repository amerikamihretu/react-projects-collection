import MovieCard from './MovieCard'
import { memo } from 'react'

const MovieList = memo(({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p className="text-center text-gray-500 dark:text-gray-400 py-8">No movies found.</p>
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
})

export default MovieList
