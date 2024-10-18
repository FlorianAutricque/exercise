import type { Todo } from "../types/Types";
import styles from "./SignelTodo.module.css";

interface SingleTodoProps {
  todo: Todo;
  handleComplete: (todo: Todo) => void;
  deleteTodo: (todoId: number) => void;
  handleShow: (todo: Todo) => void;
}

function SingleTodo({
  todo,
  handleComplete,
  deleteTodo,
  handleShow,
}: SingleTodoProps) {
  return (
    <li key={todo.id} className={styles.containerSingleTodo}>
      <p>{todo.description}</p>
      <p>
        <strong>Created At: </strong>
        {todo.meta?.createdAt
          ? new Date(todo.meta.createdAt).toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
          : "Date not available"}
      </p>

      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleComplete(todo)}
        />
        {todo.completed ? "done" : "not done"}
      </label>
      <button onClick={() => deleteTodo(todo.id)}>DEL</button>
      <button onClick={() => handleShow(todo)}>MOD</button>
    </li>
  );
}

export default SingleTodo;
