import { useState } from "react";
import type { CompletedProps } from "../types/Types";
import GetTasks from "../api/GetTodos";
import Spinner from "../components/Spinner";
import styles from "./Homepage.module.css";
import { IoMdAdd } from "react-icons/io";
import SingleTodo from "../components/SingleTodo";
import { createTodo } from "../hooks/todoFunctions";

function Homepage({
  todos,
  setTodos,
  setError,
  isLoading,
  setIsLoading,
}: CompletedProps) {
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  // GET ALL TASKS
  GetTasks(setIsLoading, setTodos, setError);

  // CREATE/ADD A NEW TASK
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTodo(description.trim(), completed, setTodos, setError);
    setDescription("");
    setCompleted(false);
  };

  return (
    <div className={styles.mainContainerHomepage}>
      <form onSubmit={handleCreate} className={styles.containerForm}>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
          placeholder="Add Todo"
        />
        <button type="submit" className="btn">
          <IoMdAdd size={32} />
        </button>
      </form>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mainContainerTodos">
          <ul
            className={`containerTodos ${
              todos.length === 1 ? "containerTodosIfOne" : ""
            }`}
          >
            {todos.map(todo => (
              <div key={todo.id}>
                <SingleTodo
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  setError={setError}
                />
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Homepage;

// changé modal pour faire un truc plus beau

// integrer tilwind css
// librarire de composant pour faire le modal par exemple
// pas refecth les todos lors du changement de page
// faire la creation sur leur repo
