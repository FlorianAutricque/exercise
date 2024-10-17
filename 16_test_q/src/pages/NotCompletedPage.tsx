import GetTasks from "../api/GetTodos";
import UpdateTask from "../api/UpdateTodo";
import Spinner from "../components/Spinner";
import { CompletedProps, Todo } from "../types/Types";

function NotCompletedPage({
  todos,
  setTodos,
  error,
  setError,
  isLoading,
  setIsLoading,
}: CompletedProps) {
  GetTasks(setIsLoading, setTodos, setError);

  const notCompletedTasks = todos.filter(todo => !todo.completed);

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

  return (
    <>
      <h1>Not completed page</h1>

      {error ? <p>there is an error</p> : ""}

      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {notCompletedTasks.length > 0 ? (
            notCompletedTasks.map(todo => (
              <div key={todo.id}>
                <li>{todo.description}</li>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleComplete(todo)}
                  />
                  {todo.completed ? "done" : "not done"}
                </label>
              </div>
            ))
          ) : (
            <p>There is no task to do</p>
          )}
        </ul>
      )}
    </>
  );
}

export default NotCompletedPage;
