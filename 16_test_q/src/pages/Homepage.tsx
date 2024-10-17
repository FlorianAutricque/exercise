import { useState } from "react";
import { z } from "zod";
import CreateTask from "../api/CreateTask";
import { Todo, CompletedProps } from "../types/Types";
import DeleteTask from "../api/DeleteTask";
import GetTasks from "../api/GetTasks";
import UpdateTask from "../api/UpdateTask";
import ModalUpdate from "../components/ModalUpdate";

function Homepage({
  data,
  setData,
  error,
  setError,
  isLoading,
  setIsLoading,
}: CompletedProps) {
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  // const [createdAt, setCreatedAt] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);
  const [currentTaskId, setCurrentTaskId] = useState<number | null>(null);

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
      // setCreatedAt(new Date());
      setError("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors.map(err => err.message).join(", "));
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
      setData,
      setError
    );
  };

  // SHOW THE UPDATE FORM/MODAL
  const handleShow = (item: Todo) => {
    setShow(!show);
    setCurrentTaskId(item.id);
    setDescription(item.description);
    setCompleted(item.completed);
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

    if (currentTaskId !== null) {
      try {
        const updateSchema = z.object({
          description: z
            .string()
            .min(10, "Description must be at least 10 characters long.")
            .optional(),
          completed: z.boolean().optional(),
        });

        const validatedData = updateSchema.parse({ description, completed });

        type UpdateData = {
          description?: string;
          completed?: boolean;
        };

        const updateData: UpdateData = {};
        if (validatedData.description !== undefined) {
          updateData.description = validatedData.description;
          setError("");
        }
        if (validatedData.completed !== undefined) {
          updateData.completed = validatedData.completed;
          setError("");
        }

        await UpdateTask(
          currentTaskId,
          updateData.description ?? "",
          updateData.completed ?? false,
          setData,
          setError
        );

        setShow(false);
        setDescription("");
        setCurrentTaskId(null);
      } catch (error) {
        if (error instanceof z.ZodError) {
          setError(error.errors.map(err => err.message).join(", "));
        }
      }
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
                    hour12: true,
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

      {show && (
        <ModalUpdate
          handleUpdate={handleUpdate}
          description={description}
          setDescription={setDescription}
          completed={completed}
          setCompleted={setCompleted}
          setShow={setShow}
        />
      )}
    </div>
  );
}

export default Homepage;
