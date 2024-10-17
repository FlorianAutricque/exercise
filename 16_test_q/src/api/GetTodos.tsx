import { useEffect } from "react";
import { Todo, ApiTodo } from "../types/Types";

function GetTasks(
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) {
  const accessKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${baseUrl}/todos?apikey=${accessKey}`);

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const todos: ApiTodo[] = await res.json();
        setTodos(
          todos.map(todo => ({
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
  }, [accessKey, baseUrl, setTodos, setError, setIsLoading]);

  return;
}

export default GetTasks;
