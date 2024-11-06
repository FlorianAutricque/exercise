import { useState } from "react";
import { completeTodo, deleteTodo, updateTodo } from "../hooks/todoFunctions";
import type { Todo } from "../types/Types";
import styles from "./SingleTodo.module.css";
import { ImBin } from "react-icons/im";

import "rodal/lib/rodal.css";
import Rodal from "rodal";

import { GrDocumentUpdate } from "react-icons/gr";
import truncatedString from "../utils/truncatedString";
import ModalUpdate from "./ModalUpdate";

interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

function SingleTodo({ todo, todos, setTodos, setError }: SingleTodoProps) {
  const [show, setShow] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [showStr, setShowStr] = useState<boolean>(false);

  // // SHOW THE UPDATE FORM/MODAL
  const handleShow = (todo: Todo) => {
    setShow(!show);
    setSelectedTodo(todo);
  };

  // Close the modal
  const hideModal = () => {
    setShow(false);
    setSelectedTodo(null);
  };

  //HANDLE DELETE
  const handleDelete = async (todoId: number) => {
    await deleteTodo(todoId, todos, setTodos, setError);
  };

  // HANDLE COMPLETION OF TASK
  const handleComplete = async (todo: Todo) => {
    await completeTodo(todo, todos, setTodos, setError);
  };

  //HANDLE UPDATE
  const handleUpdateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateTodo(
      selectedTodo,
      setTodos,
      setError,
      setShow,
      setSelectedTodo
    );
  };

  //CAPITALIZE FIRST LETTER
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const truncated = truncatedString(todo.description, 25);

  return (
    <>
      <li
        key={todo.id}
        className={`${styles.containerSingleTodo} ${
          todo.completed ? styles.completed : styles.notCompleted
        }`}
      >
        <div className={styles.containerCheckTodoUpdateDelete}>
          <div className={styles.checkboxAndTodo}>
            <label className={styles.containerCheckbox}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleComplete(todo)}
              />
              <span className={styles.checkmark}></span>
            </label>

            {todo.description.length > 25 ? (
              <>
                <p className={styles.todoStr}>
                  {showStr
                    ? capitalizeFirstLetter(todo.description)
                    : capitalizeFirstLetter(truncated)}
                </p>
                <button
                  onClick={() => setShowStr(!showStr)}
                  className={styles.btnMoreLess}
                >
                  {showStr ? "-" : "+"}
                </button>
              </>
            ) : (
              <p>{capitalizeFirstLetter(todo.description)}</p>
            )}
          </div>

          <div className={styles.btnDeleteUpdate}>
            <button onClick={() => handleShow(todo)} className="btn">
              <GrDocumentUpdate size={20} />
            </button>

            <Rodal
              visible={show}
              onClose={hideModal}
              width={400}
              height={200}
              animation="slideDown"
            >
              {!!selectedTodo && (
                <>
                  <ModalUpdate
                    handleUpdateTodo={handleUpdateTodo}
                    selectedTodo={selectedTodo}
                    setSelectedTodo={setSelectedTodo}
                  />
                </>
              )}
            </Rodal>

            <button onClick={() => handleDelete(todo.id)} className="btn">
              <ImBin size={20} />
            </button>
          </div>
        </div>

        <p className={styles.createAt}>
          {todo.meta?.createdAt
            ? new Date(todo.meta.createdAt).toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })
            : "Date not available"}
        </p>
      </li>
    </>
  );
}

export default SingleTodo;
