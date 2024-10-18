import GetTasks from "../api/GetTodos";

import SingleTodo from "../components/SingleTodo";
import Spinner from "../components/Spinner";
import type { CompletedProps } from "../types/Types";

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
                <SingleTodo
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  setError={setError}
                />
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
