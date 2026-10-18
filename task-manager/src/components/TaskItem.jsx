export default function TaskItem({ task, onToggle, onDelete }) {
  const isCompleted = task.completed
  return (
    <li className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => onToggle(task.id)}
        className="mt-1 w-5 h-5 text-indigo-600 rounded focus:ring-indigo-400"
      />
      <div className="flex-1">
        <h3 className={`text-lg font-medium ${isCompleted ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-800 dark:text-gray-200'}`}>
          {task.title}
        </h3>
        {task.description && (
          <p className={`text-sm ${isCompleted ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-300'}`}>
            {task.description}
          </p>
        )}
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition"
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  )
}