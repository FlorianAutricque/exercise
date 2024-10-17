import { useEffect } from "react";
import { Todo, ApiTodo } from "../types/Types";

function GetTasks(
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setData: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) {
  const accesKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const url = "https://todos.simpleapi.dev/api/todos?apikey=";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${url}${accesKey}`);

        if (!res.ok) {
          throw new Error("Something went wrong 🫠");
        }

        const data: ApiTodo[] = await res.json();
        setData(
          data.map(todo => ({
            ...todo,
            completed: todo.completed === 1,
            meta: {
              createdAt: new Date(todo.meta.createdAt),
            },
          }))
        );
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [accesKey, setData, setError, setIsLoading]);

  return;
}

export default GetTasks;
