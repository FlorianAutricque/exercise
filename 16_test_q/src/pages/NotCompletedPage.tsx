import { CompletedProps } from "../types/Types";

function NotCompletedPage({ data }: CompletedProps) {
  const notCompletedTasks = data.filter(item => !item.completed);
  return (
    <>
      <h1>Not completed page</h1>
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
