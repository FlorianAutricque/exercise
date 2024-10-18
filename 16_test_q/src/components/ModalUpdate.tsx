import type { Todo } from "../types/Types";
import styles from "./ModalUpdate.module.css";
import stylesCheckbox from "./SingleTodo.module.css";

import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalUpdateProps {
  handleUpdateTodo: (e: React.FormEvent) => void;
  selectedTodo: Todo;
  setSelectedTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalUpdate({
  handleUpdateTodo,
  selectedTodo,
  setSelectedTodo,
  setShow,
}: ModalUpdateProps) {
  return (
    <div className={styles.mainContainerUpdate}>
      <div className={styles.containerTitleClose}>
        <h3>Update Todo</h3>
        <button onClick={() => setShow(false)} className="btn">
          <IoIosCloseCircleOutline size={20} />
        </button>
      </div>

      <form onSubmit={handleUpdateTodo}>
        <div className={styles.containerModalTodoCheckbox}>
          <label className={stylesCheckbox.containerCheckbox}>
            <input
              type="checkbox"
              checked={selectedTodo.completed}
              onChange={() =>
                setSelectedTodo({
                  ...selectedTodo,
                  completed: !selectedTodo.completed,
                })
              }
            />
            <span className={stylesCheckbox.checkmark}></span>
          </label>

          <input
            type="text"
            value={selectedTodo.description}
            onChange={e =>
              setSelectedTodo({ ...selectedTodo, description: e.target.value })
            }
          />
        </div>

        <button type="submit" className={`btn ${styles.btnModal}`}>
          Update
        </button>
      </form>
    </div>
  );
}

export default ModalUpdate;
