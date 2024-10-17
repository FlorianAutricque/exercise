import GetTasks from "../api/GetTodos";
import Spinner from "../components/Spinner";
import { CompletedProps } from "../types/Types";

function CompletedPage({
  todos,
  setTodos,
  error,
  setError,
  isLoading,
  setIsLoading,
}: CompletedProps) {
  GetTasks(setIsLoading, setTodos, setError);

  const completedTasks = todos.filter(todo => todo.completed);

  return (
    <>
      <h1>Completed Page</h1>

      {error ? <p>there is an error</p> : ""}

      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {completedTasks.length > 0 ? (
            completedTasks.map(todo => (
              <li key={todo.id}>{todo.description}</li>
            ))
          ) : (
            <p>There are no tasks completed yet</p>
          )}
        </ul>
      )}
    </>
  );
}

export default CompletedPage;
