import { completeTodo, deleteTodo } from "../hooks/todoFunctions";
import type { Todo } from "../types/Types";
import styles from "./SignelTodo.module.css";

interface SingleTodoProps {
  todo: Todo;
  todos: Todo[]; // Array of todos for handling updates
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // Function to update the todos
  setError: React.Dispatch<React.SetStateAction<string>>; // Function to set error messages
  // show: boolean; // State to control the visibility of the update form/modal
  // setShow: React.Dispatch<React.SetStateAction<boolean>>; // Function to toggle the show state
  // setSelectedTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
}

function SingleTodo({
  todo,
  todos,
  setTodos,
  setError,
}: // show,
// setShow,
// setSelectedTodo,
SingleTodoProps) {
  //HANDLE DELETE
  const handleDelete = async (todoId: number) => {
    await deleteTodo(todoId, todos, setTodos, setError);
  };

  // HANDLE COMPLETION OF TASK
  const handleComplete = async (todo: Todo) => {
    await completeTodo(todo, todos, setTodos, setError);
  };

  // SHOW THE UPDATE FORM/MODAL
  // const handleShow = (todo: Todo) => {
  //   setShow(!show);
  //   setSelectedTodo(todo);
  // };
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
      <button onClick={() => handleDelete(todo.id)}>DEL</button>
    </li>
  );
}

export default SingleTodo;
