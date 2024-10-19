import { z } from "zod";
import CreateTask from "../api/CreateTodo";
import DeleteTask from "../api/DeleteTodo";
import UpdateTask from "../api/UpdateTodo";
import { taskSchema } from "../validation/taskSchema";
import toast from "react-hot-toast";
import type { Todo } from "../types/Types";
import DeleteAllCompletedTodos from "../api/DeleteAllCompletedTodos";

export const createTodo = async (
  description: string,
  completed: boolean,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    taskSchema.parse({ description, completed, createdAt: new Date() });
    await CreateTask(description, completed, setTodos, setError);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      setError(error.errors.map(err => toast.error(err.message)).join(", "));
    }
    return false;
  }
};

export const deleteTodo = async (
  todoId: number,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  await DeleteTask(todos, setTodos, setError, todoId);
};

export const deleteAllCompletedTodos = async (
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  await DeleteAllCompletedTodos(todos, setTodos, setError);
};

export const completeTodo = async (
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
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

export const updateTodo = async (
  selectedTodo: Todo | null,
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  setShow: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectedTodo: React.Dispatch<React.SetStateAction<Todo | null>>
) => {
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
