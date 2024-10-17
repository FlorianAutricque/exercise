import type { Todo } from "../types/Types";

interface ModalUpdateProps {
  handleUpdate: (e: React.FormEvent) => void;
  task: Todo;
  setTask: React.Dispatch<React.SetStateAction<Todo | null>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalUpdate({
  handleUpdate,
  task,
  setTask,
  setShow,
}: ModalUpdateProps) {
  return (
    <div>
      <h1>Update Task</h1>
      <form onSubmit={handleUpdate}>
        <label>Description:</label>
        <input
          type="text"
          value={task.description}
          onChange={e => setTask({ ...task, description: e.target.value })}
          required
        />
        <label>
          Completed:
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => setTask({ ...task, completed: !task.completed })}
          />
        </label>
        <button type="submit">Update task</button>

        <button onClick={() => setShow(false)}>Close</button>
      </form>
    </div>
  );
}

export default ModalUpdate;
