import { useSelector, useDispatch } from 'react-redux'
import { removeSearch, clearHistory } from '../../redux/searchSlice'

export default function SearchHistory({ onSearch }) {
  const history = useSelector((state) => state.search.history)
  const dispatch = useDispatch()

  if (history.length === 0) return null

  return (
    <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">Recent Searches</h3>
        <button
          onClick={() => dispatch(clearHistory())}
          className="text-xs text-red-500 hover:text-red-700"
        >
          Clear All
        </button>
      </div>
      <ul className="flex flex-wrap gap-2">
        {history.map((term) => (
          <li key={term} className="flex items-center gap-1">
            <button
              onClick={() => onSearch(term)}
              className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 rounded text-sm hover:bg-indigo-200"
            >
              {term}
            </button>
            <button
              onClick={() => dispatch(removeSearch(term))}
              className="text-xs text-gray-400 hover:text-red-500"
              aria-label="Remove"
            >
              ?
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
