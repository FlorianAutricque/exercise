import { useState } from "react";
import type { Todo, CompletedProps } from "../types/Types";
import GetTasks from "../api/GetTodos";
import ModalUpdate from "../components/ModalUpdate";
import Spinner from "../components/Spinner";

import styles from "./Homepage.module.css";

import { IoMdAdd } from "react-icons/io";
import SingleTodo from "../components/SingleTodo";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { createTodo, updateTodo } from "../hooks/todoFunctions";

function Homepage({
  todos,
  setTodos,
  setError,
  isLoading,
  setIsLoading,
}: CompletedProps) {
  const [description, setDescription] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [show, setShow] = useState<boolean>(false);

  // GET ALL TASKS
  GetTasks(setIsLoading, setTodos, setError);

  // CREATE/ADD A NEW TASK
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTodo(description, completed, setTodos, setError);
    setDescription("");
    setCompleted(false);
  };

  // // SHOW THE UPDATE FORM/MODAL
  const handleShow = (todo: Todo) => {
    setShow(!show);
    setSelectedTodo(todo);
  };

  //HANDLE UPDATE
  const handleUpdateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateTodo(selectedTodo, setTodos, setError, setShow);
    setSelectedTodo(null);
  };

  return (
    <div>
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
        <ul>
          {todos.map(todo => (
            <div>
              <SingleTodo
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                setError={setError}
              />
              <button onClick={() => handleShow(todo)} className="btn">
                <MdOutlineSystemUpdateAlt />
              </button>
            </div>
          ))}
        </ul>
      )}

      {show && !!selectedTodo && (
        <ModalUpdate
          handleUpdateTodo={handleUpdateTodo}
          task={selectedTodo}
          setTask={setSelectedTodo}
          setShow={setShow}
        />
      )}
    </div>
  );
}

export default Homepage;
