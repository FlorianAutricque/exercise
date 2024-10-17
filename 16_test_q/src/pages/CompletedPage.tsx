import GetTasks from "../api/GetTasks";
import { CompletedProps } from "../types/Types";

function CompletedPage({
  data,
  setData,
  error,
  setError,
  isLoading,
  setIsLoading,
}: CompletedProps) {
  GetTasks(setIsLoading, setData, setError);

  const completedTasks = data.filter(item => item.completed);

  return (
    <>
      <h1>Completed Page</h1>

      {error ? <p>there is an error</p> : ""}

      {isLoading ? <p>Loading...</p> : ""}

      <ul>
        {completedTasks.length > 0 ? (
          completedTasks.map(item => <li key={item.id}>{item.description}</li>)
        ) : (
          <p>There are no tasks completed yet</p>
        )}
      </ul>
    </>
  );
}

export default CompletedPage;
