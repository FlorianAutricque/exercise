import GetTasks from "../api/GetTasks";
import UpdateTask from "../api/UpdateTask";
import Spinner from "../components/Spinner";
import { CompletedProps, Todo } from "../types/Types";

function NotCompletedPage({
  data,
  setData,
  error,
  setError,
  isLoading,
  setIsLoading,
}: CompletedProps) {
  GetTasks(setIsLoading, setData, setError);

  const notCompletedTasks = data.filter(item => !item.completed);

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

  return (
    <>
      <h1>Not completed page</h1>

      {error ? <p>there is an error</p> : ""}

      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {notCompletedTasks && data.length > 0 ? (
            notCompletedTasks.map(item => (
              <div key={item.id}>
                <li>{item.description}</li>
                <label>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleComplete(item)}
                  />
                  {item.completed ? "done" : "not done"}
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
