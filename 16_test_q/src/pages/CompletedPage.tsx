import { CompletedProps } from "../types/Types";

function CompletedPage({ data }: CompletedProps) {
  const completedTasks = data.filter(item => item.completed);
  return (
    <>
      <h1>Completed Page</h1>

      <ul>
        {completedTasks && data.length > 0 ? (
          completedTasks.map(item => <li key={item.id}>{item.description}</li>)
        ) : (
          <p>There are no tasks completed yet.</p>
        )}
      </ul>
    </>
  );
}

export default CompletedPage;
