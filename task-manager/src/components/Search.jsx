export default function Search({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search tasks..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 w-full sm:w-56"
    />
  )
}