import { useState } from "react";
import { z } from "zod";
import CreateTask from "../api/CreateTask";
import type { Todo, CompletedProps } from "../types/Types";
import DeleteTask from "../api/DeleteTask";
import GetTasks from "../api/GetTasks";
import UpdateTask from "../api/UpdateTask";
import ModalUpdate from "../components/ModalUpdate";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";

function Homepage({
  data,
  setData,
  setError,
  isLoading,
  setIsLoading,
}: CompletedProps) {
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<Todo | null>(null);
  const [show, setShow] = useState<boolean>(false);

  //ZOD VALIDATION
  const taskSchema = z.object({
    description: z
      .string()
      .min(10, "Description must be at least 10 characters long."),
    completed: z.boolean(),
    createdAt: z.date(),
  });

  // GET ALL TASKS
  GetTasks(setIsLoading, setData, setError);

  // CREATE/ADD A NEW TASK
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      taskSchema.parse({ description, completed, createdAt: new Date() });

      await CreateTask(description, completed, setData, setError);
      setDescription("");
      setCompleted(false);
      setError("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors.map(err => toast.error(err.message)).join(", "));
      }
    }
  };

  // HANDLE DELETION OF TASK
  const deleteItem = async (itemId: number) => {
    DeleteTask(data, setData, setError, itemId);
  };

  // HANDLE COMPLETION OF TASK
  const handleComplete = async (item: Todo) => {
    const updatedTasks = data.map(task =>
      task.id === item.id ? { ...task, completed: !task.completed } : task
    );
    setData(updatedTasks);

    await UpdateTask(
      item.id,
      item.description,
      !item.completed,
      item.meta.createdAt,
      setData,
      setError
    );
  };

  // SHOW THE UPDATE FORM/MODAL
  const handleShow = (item: Todo) => {
    setShow(!show);
    // setDescription(item.description);
    // setCompleted(item.completed);
    setSelectedTask(item);
  };

  /*FUCNTION HANDLE UPDATE:
      - Check if I'm in the current task
      - Define a new z object with optional validation fields
      - Parse this object with what I can modify (description and completed)
      - Define a new type with the fact that they are optional
      - Create new obj with the value that need to be updated. This obj has the form of UpdateData
      - Assign validated description to UpdateData if defined/clear errors
      - Assign validated completed to UpdateData if defined/clear errors
      - Fetch with the UpdateTask function: update the server side (we pass the description and completed if it has been updated) */
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTask) return;
    try {
      const updateSchema = z.object({
        description: z
          .string()
          .min(10, "Description must be at least 10 characters long."),
        completed: z.boolean(),
        createdAt: z.date(),
      });

      updateSchema.parse({
        description: selectedTask.description,
        completed: selectedTask.completed,
        createdAt: selectedTask.meta.createdAt,
      });

      await UpdateTask(
        selectedTask.id,
        selectedTask.description,
        selectedTask.completed,
        selectedTask.meta.createdAt,
        setData,
        setError
      );

      setError("");
      setShow(false);
      setSelectedTask(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors.map(err => toast.error(err.message)).join(", "));
      }
    }
  };

  return (
    <div>
      {isLoading ? <Spinner /> : ""}

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
            <p>{item.description}</p>
            <p>
              <strong>Created At: </strong>
              {item.meta?.createdAt
                ? new Date(item.meta.createdAt).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })
                : "Date not available"}
            </p>

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

      {show && !!selectedTask && (
        <ModalUpdate
          handleUpdate={handleUpdate}
          task={selectedTask}
          setTask={setSelectedTask}
          setShow={setShow}
        />
      )}
    </div>
  );
}

export default Homepage;
