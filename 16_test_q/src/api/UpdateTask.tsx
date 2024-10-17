import toast from "react-hot-toast";
import { Todo } from "../types/Types";

async function UpdateTask(
  id: number,
  description: string,
  completed: boolean,
  setData: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) {
  const accesKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const url = `https://todos.simpleapi.dev/api/todos/${id}?apikey=${accesKey}`;

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        completed: completed ? 1 : 0,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to update task");
    }

    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, description, completed } : item
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
