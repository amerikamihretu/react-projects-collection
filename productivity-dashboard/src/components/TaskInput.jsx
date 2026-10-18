import { useRef, useState } from "react";

function TaskInput({
  onAddTask,
}) {
  const [task, setTask] = useState("");

  const inputRef = useRef(null);

  function handleSubmit() {
    if (!task.trim()) return;

    onAddTask(task);

    setTask("");

    inputRef.current.focus();
  }

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        value={task}
        onChange={(e) =>
          setTask(e.target.value)
        }
        placeholder="Add a new task..."
        className="w-full rounded border px-4 py-2"
      />

      <button
        onClick={handleSubmit}
        className="rounded bg-black px-4 py-2 text-white"
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;