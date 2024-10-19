import toast from "react-hot-toast";
import type { Todo } from "../types/Types";

async function DeleteAllCompletedTodos(
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) {
  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  try {
    const res = await fetch(
      `${baseUrl}/todos/?apikey=${accessKey}&completed=true`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete all completed todos");
    }

    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
    toast.success(" All completed todos are deleted");
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Something went wrong with deletion of all completed todos");
    }

    toast.error(" Failed to delete completed todos");
  }
  return;
}

export default DeleteAllCompletedTodos;
