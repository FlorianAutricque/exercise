import toast from "react-hot-toast";
import { Todo } from "../types/Types";

async function DeleteTask(
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  todoId: number
) {
  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  try {
    const res = await fetch(`${baseUrl}/todos/${todoId}?apikey=${accessKey}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete the task");
    }

    const updatedList = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedList);
    toast.success("Task successfully deleted");
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Something went wrong");
    }

    toast.error("Failed to delete task");
  }
  return;
}

export default DeleteTask;
