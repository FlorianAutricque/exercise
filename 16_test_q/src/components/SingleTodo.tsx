import { completeTodo, deleteTodo } from "../hooks/todoFunctions";
import type { Todo } from "../types/Types";
import styles from "./SingleTodo.module.css";
import { ImBin } from "react-icons/im";

interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

function SingleTodo({ todo, todos, setTodos, setError }: SingleTodoProps) {
  //HANDLE DELETE
  const handleDelete = async (todoId: number) => {
    await deleteTodo(todoId, todos, setTodos, setError);
  };

  // HANDLE COMPLETION OF TASK
  const handleComplete = async (todo: Todo) => {
    await completeTodo(todo, todos, setTodos, setError);
  };

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <li key={todo.id} className={styles.containerSingleTodo}>
      <span>
        <label className={styles.containerCheckbox}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleComplete(todo)}
          />
          <span className={styles.Checkmark}></span>
        </label>

        <p>{capitalizeFirstLetter(todo.description)}</p>
      </span>
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
      <button onClick={() => handleDelete(todo.id)} className="btn">
        <ImBin size={32} />
      </button>
    </li>
  );
}

export default SingleTodo;
