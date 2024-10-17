import GetTasks from "../api/GetTasks";
import { CompletedProps } from "../types/Types";

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

  return (
    <>
      <h1>Not completed page</h1>

      {error ? <p>there is an error</p> : ""}

      {isLoading ? <p>Loading...</p> : ""}
      <ul>
        {notCompletedTasks && data.length > 0 ? (
          notCompletedTasks.map(item => (
            <li key={item.id}>{item.description}</li>
          ))
        ) : (
          <p>There is no task to do</p>
        )}
      </ul>
    </>
  );
}

export default NotCompletedPage;
