function TaskItem({
  task,
  onDelete,
  onToggle,
}) {
  return (
    <div className="flex items-center justify-between rounded border p-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <span
          className={
            task.completed
              ? "line-through text-gray-400"
              : ""
          }
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="rounded bg-red-500 px-3 py-1 text-white"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;