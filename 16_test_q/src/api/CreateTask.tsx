import Todo from "../types/Types";

async function CreateTask(
  description: string,
  completed: boolean,
  setData: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) {
  const accesKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const url = "https://todos.simpleapi.dev/api/todos?apikey=";

  const newTask: Omit<Todo, "id"> = {
    // Create a new task without the id
    description: description,
    completed: completed,
    meta: {},
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
    const createdTask: Todo = await res.json();
    setData(prevData => [...prevData, createdTask]);
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Something went wrong");
    }
  }
  return;
}

export default CreateTask;
