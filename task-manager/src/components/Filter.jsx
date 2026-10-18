export default function Filter({ filter, setFilter }) {
  const options = ['all', 'active', 'completed']
  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setFilter(option)}
          className={`px-4 py-1 rounded-full capitalize transition-colors ${
            filter === option
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}