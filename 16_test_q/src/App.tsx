import { useState } from "react";
import CreateTask from "./api/CreateTask";
import Todo from "./types/Types";
import DeleteTask from "./api/DeleteTask";
import GetTasks from "./api/GetTasks";
import UpdateTask from "./api/UpdateTask"; // Make sure to import the update function
import CompleteTask from "./api/CompleteTask";

function App() {
  const [data, setData] = useState<Todo[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null); // For the current task to update

  // Get all the tasks
  GetTasks(setIsLoading, setData, setError);

  // Create/Add a new task
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await CreateTask(description, completed, setData, setError);
    setDescription("");
    setCompleted(false);
  };

  // Delete a task
  const deleteItem = async (itemId: number) => {
    DeleteTask(data, setData, setError, itemId);
  };

  // Complete a task

  const handleComplete = async (item: Todo) => {
    // Toggle completion locally first
    const updatedTasks = data.map(task =>
      task.id === item.id ? { ...task, completed: !task.completed } : task
    );

    // Update the state
    setData(updatedTasks);

    // Call CompleteTask with the item description
    await CompleteTask(
      item.id,
      item.description,
      !item.completed,
      setData,
      setError
    );
  };

  // Show update form
  const handleShow = (item: Todo) => {
    setShow(!show);
    setCurrentTaskId(item.id);
    setDescription(item.description);
    setCompleted(item.completed);
  };

  // Handle task update
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentTaskId !== null) {
      await UpdateTask(
        currentTaskId,
        description,
        completed,
        setData,
        setError
      ); // Call update with description and completed
      setShow(false); // Hide the update form after updating
      setDescription(""); // Reset the input
      setCurrentTaskId(null); // Reset current task ID
    }
  };

  return (
    <div>
      {isLoading ? <p>Loading ...</p> : ""}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.description}
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleComplete(item)}
              />
              {item.completed ? "done" : "not done"}
            </label>
            <button onClick={() => deleteItem(item.id)}>DEL</button>
            <button onClick={() => handleShow(item)}>MOD</button>
          </li>
        ))}
      </ul>
      {show && (
        <div>
          <h1>Update Task</h1>
          <form onSubmit={handleUpdate}>
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
            <label>
              Completed:
              <input
                type="checkbox"
                checked={completed}
                onChange={() => setCompleted(!completed)} // Toggle completion
              />
            </label>
            <button type="submit">Update task</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
