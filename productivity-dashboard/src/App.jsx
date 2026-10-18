import { useMemo, useState} from "react";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const [search, setSearch] =
    useState("");
  
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);
  }

  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== id
      )
    );
  }

  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
      )
    );
  }

  const filteredTasks = useMemo(
    () =>
      tasks.filter((task) =>
        task.text
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
      ),
    [tasks, search]
  );

  const completedTasks =
    tasks.filter(
      (task) => task.completed
    ).length;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">
          Productivity Dashboard
        </h1>

        <section className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-6 text-xl font-semibold">
            Task Manager
          </h2>

          <TaskInput
            onAddTask={addTask}
          />

          <div className="mt-6">
            <label>
              Search:
            </label>

            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search tasks..."
              className="mt-2 w-full rounded border px-4 py-2"
            />
          </div>

          <div className="my-6 flex gap-8">
            <p>
              Tasks: {tasks.length}
            </p>

            <p>
              Completed:
              {" "}
              {completedTasks}
            </p>
          </div>

          <TaskList
            tasks={filteredTasks}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        </section>
      </div>
    </div>
  );
}

export default App;