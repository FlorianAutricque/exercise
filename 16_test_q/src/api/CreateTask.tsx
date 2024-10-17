import toast from "react-hot-toast";
import { Todo, ApiTodo } from "../types/Types";

async function CreateTask(
  description: string,
  completed: boolean,
  setData: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) {
  const accesKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const url = "https://todos.simpleapi.dev/api/todos?apikey=";

  const newTask: Omit<ApiTodo, "id"> = {
    description: description,
    completed: completed ? 1 : 0,
    meta: { createdAt: new Date() },
  };

  try {
    const res = await fetch(`${url}${accesKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    if (!res.ok) {
      throw new Error("Failed to add the task");
    }

    // respect la structure todo/////////////////
    const createdTask: ApiTodo = await res.json();
    setData(prevData => [
      ...prevData,
      {
        ...createdTask,
        completed: createdTask.completed === 1,
        meta: {
          createdAt: new Date(createdTask.meta.createdAt),
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
