import Todo from "../types/Types";

// UpdateTask.ts
const updateTask = async (
  id: number,
  description: string,
  completed: boolean,
  setData: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>> // Keep error handling
) => {
  const accesKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const url = `https://todos.simpleapi.dev/api/todos/${id}?apikey=${accesKey}`;

  try {
    const res = await fetch(url, {
      method: "PUT", // Update the task
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description, // Pass description
        completed: completed ? 1 : 0, // Convert boolean to 1 or 0
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to update task");
    }

    // Optionally update the local state after successful API call
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, description, completed } : item
      )
    );
  } catch (err) {
    if (err instanceof Error) {
      setError(err.message); // Set error message to state
    } else {
      setError("Something went wrong while updating the task.");
    }
    console.log(err);
  }
};

export default updateTask;
