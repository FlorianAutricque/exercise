import GetTasks from "../api/GetTodos";
import SingleTodo from "../components/SingleTodo";
import Spinner from "../components/Spinner";
import { deleteAllCompletedTodos } from "../hooks/todoFunctions";
import type { CompletedProps } from "../types/Types";

function CompletedPage({
  todos,
  setTodos,
  setError,
  isLoading,
  setIsLoading,
}: CompletedProps) {
  GetTasks(setIsLoading, setTodos, setError);

  const completedTasks = todos.filter(todo => todo.completed);

  //DELETE ALL COMPLETED TODOS
  const handleDeleteCompletedTodos = async () => {
    await deleteAllCompletedTodos(todos, setTodos, setError);
  };

  return (
    <>
      <h3>Completed Todos</h3>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mainContainerTodos">
          <ul
            className={`containerTodos ${
              completedTasks.length <= 1 ? "containerTodosIfOne" : ""
            }`}
          >
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
              <p>There is no todos completed yet</p>
            )}
          </ul>

          {completedTasks.length > 0 ? (
            <button
              onClick={handleDeleteCompletedTodos}
              className="btn btn--delete"
            >
              Delete all completed todos
            </button>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default CompletedPage;
