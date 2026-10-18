const API_KEY = import.meta.env.VITE_OMDB_API_KEY
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL || 'https://www.omdbapi.com/'

export const searchMovies = (query, page = 1) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`
  return url
}

export const getMovieDetails = (imdbID) => {
  const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
  return url
}
