import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onDelete,
  onToggle,
  tasksRef,
}) {
  return (
    <div
      ref={tasksRef}
      className="space-y-3"
    >
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default TaskList;