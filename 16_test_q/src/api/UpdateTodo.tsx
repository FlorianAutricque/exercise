import toast from "react-hot-toast";
import { Todo } from "../types/Types";

async function UpdateTask(
  todoId: number,
  description: string,
  completed: boolean,
  createdAt: Date,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) {
  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  try {
    const res = await fetch(`${baseUrl}/todos/${todoId}?apikey=${accessKey}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        completed: completed ? 1 : 0,
        meta: { createdAt },
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to update task");
    }

    /* EXPLANATIONS:
      - Map over the current list of todos (prevData)
      - Check each todo, to see if the todo's id matches the todoId of the task being updated
      - Creations of a new object with the updated description and completed status */
    setTodos(prevData =>
      prevData.map(todo =>
        todo.id === todoId ? { ...todo, description, completed } : todo
      )
    );
    toast.success("Task successfully updated");
  } catch (err) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Something went wrong while updating the task");
    }
    toast.error("Task not updated");
  }
}

export default UpdateTask;
