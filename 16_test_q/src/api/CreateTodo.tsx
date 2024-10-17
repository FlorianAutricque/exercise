import toast from "react-hot-toast";
import { Todo, ApiTodo } from "../types/Types";

async function CreateTask(
  description: string,
  completed: boolean,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) {
  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  const newTodo: Omit<ApiTodo, "id"> = {
    description: description,
    completed: completed ? 1 : 0,
    meta: { createdAt: new Date() },
  };

  try {
    const res = await fetch(`${baseUrl}/todos?apikey=${accessKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    if (!res.ok) {
      throw new Error("Failed to add the task");
    }

    // respect la structure todo/////////////////
    const createdTodo: ApiTodo = await res.json();
    setTodos(prevData => [
      ...prevData,
      {
        ...createdTodo,
        completed: createdTodo.completed === 1,
        meta: {
          createdAt: new Date(createdTodo.meta.createdAt),
        },
      },
    ]);
    toast.success("New task added");
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Something went wrong with the creation of task");
    }
    toast.error("Error adding new task");
  }
  return;
}

export default CreateTask;
