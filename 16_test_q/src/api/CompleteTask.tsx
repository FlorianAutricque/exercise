// CompleteTask.ts
import Todo from "../types/Types";

const CompleteTask = async (
  id: number,
  description: string, // Add description parameter
  completed: boolean,
  setData: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  const accesKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const url = `https://todos.simpleapi.dev/api/todos/${id}?apikey=${accesKey}`;

  try {
    const res = await fetch(url, {
      method: "PUT", // Ensure this is the correct HTTP method
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description, // Include the description
        completed: completed ? 1 : 0, // Convert boolean to 1 or 0 for the API
      }),
    });

    if (!res.ok) {
      const errorResponse = await res.text(); // Get error response text for debugging
      throw new Error(
        `Failed to update task completion status: ${errorResponse}`
      );
    }

    // Optionally update the local state after successful API call
    setData(prevData =>
      prevData.map(item => (item.id === id ? { ...item, completed } : item))
    );
  } catch (err) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError(
        "Something went wrong while updating the task completion status."
      );
    }
    console.error(err);
  }
};

export default CompleteTask;
