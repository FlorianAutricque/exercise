import { useEffect, useState } from "react";

// Define the type for a Todo item
interface Todo {
  id: number; // Adjust according to your API response structure
  description: string;
  completed: boolean;
  meta: Record<string, unknown>; // Adjust based on the expected structure of meta
}

function App() {
  const [data, setData] = useState<Todo[]>([]); // State for storing todos
  const [error, setError] = useState<string>(""); // State for error messages
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
  const [description, setDescription] = useState<string>(""); // State for description input
  const [completed, setCompleted] = useState<boolean>(false); // State for completion flag

  const accesKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const url = "https://todos.simpleapi.dev/api/todos?apikey=";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      const createdTask: Todo = await res.json(); // Assuming the API returns the created task
      setData(prevData => [...prevData, createdTask]); // Update state with the new task
      setDescription(""); // Clear the description input field
      setCompleted(false); // Reset the completion flag
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

  const deleteItem = async (itemId: number) => {
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
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${url}${accesKey}`);

        if (!res.ok) {
          throw new Error("Something went wrong 🫠");
        }

        const data: Todo[] = await res.json();
        setData(data); // Set fetched data to state
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
  }, [accesKey]);

  return (
    <div>
      {isLoading ? <p>Loading ...</p> : ""}
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e => setCompleted(e.target.checked)}
          />
          Completed
        </label>
        <button type="submit">Add task</button>
      </form>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.description} {item.completed ? "(Completed)" : ""}
            <button onClick={() => deleteItem(item.id)}>DEL</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
