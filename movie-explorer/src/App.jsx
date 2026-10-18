import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import { useLocalStorageSync } from './hooks/useLocalStorage'
import { useSearchSync } from './hooks/useSearchSync'

const HomePage = lazy(() => import('./pages/HomePage'))
const MoviePage = lazy(() => import('./pages/MoviePage'))
const WatchlistPage = lazy(() => import('./pages/WatchlistPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))

function App() {
  useLocalStorageSync()
  useSearchSync()

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Header />
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
