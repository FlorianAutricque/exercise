import { Todo } from "../types/Types";

async function DeleteTask(
  data: Todo[],
  setData: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  itemId: number
) {
  const accesKey = import.meta.env.VITE_REACT_APP_API_KEY;

  try {
    const res = await fetch(
      `https://todos.simpleapi.dev/api/todos/${itemId}?apikey=${accesKey}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete the task");
    }

    const updatedList = data.filter(item => item.id !== itemId);
    setData(updatedList);
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Something went wrong");
    }
  }
  return;
}

export default DeleteTask;
