import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import Filter from './components/Filter'
import Search from './components/Search'
import TaskList from './components/TaskList'
import ThemeToggle from './components/ThemeToggle'   // remove this line if you don't want dark mode

const initialTasks = [
  { id: 1, title: 'Learn React', description: 'Complete the tutorial', completed: false },
  { id: 2, title: 'Build a project', description: 'Create a task manager', completed: true },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [darkMode, setDarkMode] = useState(false)   // remove if no dark mode

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])   // remove this useEffect if no dark mode

  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description, completed: false }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  let filteredTasks = tasks
  if (filter === 'active') filteredTasks = filteredTasks.filter(t => !t.completed)
  if (filter === 'completed') filteredTasks = filteredTasks.filter(t => t.completed)
  if (searchQuery.trim()) {
    filteredTasks = filteredTasks.filter(t =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">📋 Task Manager</h1>
          {/* remove the next line if you don't want dark mode */}
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <AddTask onAdd={addTask} />
        <div className="flex flex-wrap items-center justify-between gap-4 my-6">
          <Filter filter={filter} setFilter={setFilter} />
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            No tasks match your criteria.
          </p>
        ) : (
          <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
        )}
      </div>
    </div>
  )
}

export default App