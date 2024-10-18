import GetTasks from "../api/GetTodos";
import SingleTodo from "../components/SingleTodo";
import Spinner from "../components/Spinner";
import type { CompletedProps } from "../types/Types";

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
              <div key={todo.id}>
                <SingleTodo
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  setError={setError}
                />
              </div>
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
