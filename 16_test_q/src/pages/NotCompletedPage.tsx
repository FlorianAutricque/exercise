import GetTasks from "../api/GetTodos";

import SingleTodo from "../components/SingleTodo";
import Spinner from "../components/Spinner";
import type { CompletedProps } from "../types/Types";

function NotCompletedPage({
  todos,
  setTodos,
  setError,
  isLoading,
  setIsLoading,
}: CompletedProps) {
  GetTasks(setIsLoading, setTodos, setError);

  const notCompletedTasks = todos.filter(todo => !todo.completed);

  return (
    <>
      <h3>Not Completed Tasks</h3>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mainContainerTodos">
          <ul
            className={`containerTodos ${
              notCompletedTasks.length === 1 ? "containerTodosIfOne" : ""
            }`}
          >
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
        </div>
      )}
    </>
  );
}

export default NotCompletedPage;
