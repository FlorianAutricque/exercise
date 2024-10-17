import { useState } from "react";
import { z } from "zod";
import CreateTask from "../api/CreateTodo";
import type { Todo, CompletedProps } from "../types/Types";
import DeleteTask from "../api/DeleteTodo";
import GetTasks from "../api/GetTodos";
import UpdateTask from "../api/UpdateTodo";
import ModalUpdate from "../components/ModalUpdate";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";
import { taskSchema } from "../validation/taskSchema";

function Homepage({
  todos,
  setTodos,
  setError,
  isLoading,
  setIsLoading,
}: CompletedProps) {
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [show, setShow] = useState<boolean>(false);

  // GET ALL TASKS
  GetTasks(setIsLoading, setTodos, setError);

  // CREATE/ADD A NEW TASK
  const handleCreateTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      taskSchema.parse({ description, completed, createdAt: new Date() });

      await CreateTask(description, completed, setTodos, setError);
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
  const deleteTodo = async (todoId: number) => {
    DeleteTask(todos, setTodos, setError, todoId);
  };

  // HANDLE COMPLETION OF TASK
  const handleComplete = async (todo: Todo) => {
    const updatedTasks = todos.map(task =>
      task.id === todo.id ? { ...task, completed: !task.completed } : task
    );
    setTodos(updatedTasks);

    await UpdateTask(
      todo.id,
      todo.description,
      !todo.completed,
      todo.meta.createdAt,
      setTodos,
      setError
    );
  };

  // SHOW THE UPDATE FORM/MODAL
  const handleShow = (todo: Todo) => {
    setShow(!show);
    // setDescription(todo.description);
    // setCompleted(todo.completed);
    setSelectedTodo(todo);
  };

  /*FUCNTION HANDLE UPDATE:
      - Check if I'm in the current task
      - Define a new z object with optional validation fields
      - Parse this object with what I can modify (description and completed)
      - Define a new type with the fact that they are optional
      - Create new obj with the value that need to be updated. This obj has the form of Updatetodos
      - Assign validated description to Updatetodos if defined/clear errors
      - Assign validated completed to Updatetodos if defined/clear errors
      - Fetch with the UpdateTask function: update the server side (we pass the description and completed if it has been updated) */
  const handleUpdateTodo = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTodo) return;
    try {
      taskSchema.parse({
        description: selectedTodo.description,
        completed: selectedTodo.completed,
        createdAt: selectedTodo.meta.createdAt,
      });

      await UpdateTask(
        selectedTodo.id,
        selectedTodo.description,
        selectedTodo.completed,
        selectedTodo.meta.createdAt,
        setTodos,
        setError
      );

      setError("");
      setShow(false);
      setSelectedTodo(null);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors.map(err => toast.error(err.message)).join(", "));
      }
    }
  };

  return (
    <div>
      {isLoading ? <Spinner /> : ""}

      <form onSubmit={handleCreateTodo}>
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
        {todos.map(todo => (
          <li key={todo.id}>
            <p>{todo.description}</p>
            <p>
              <strong>Created At: </strong>
              {todo.meta?.createdAt
                ? new Date(todo.meta.createdAt).toLocaleString("en-US", {
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
                checked={todo.completed}
                onChange={() => handleComplete(todo)}
              />
              {todo.completed ? "done" : "not done"}
            </label>
            <button onClick={() => deleteTodo(todo.id)}>DEL</button>
            <button onClick={() => handleShow(todo)}>MOD</button>
          </li>
        ))}
      </ul>

      {show && !!selectedTodo && (
        <ModalUpdate
          handleUpdateTodo={handleUpdateTodo}
          task={selectedTodo}
          setTask={setSelectedTodo}
          setShow={setShow}
        />
      )}
    </div>
  );
}

export default Homepage;
