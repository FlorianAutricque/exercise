import type { Todo } from "../types/Types";
import styles from "./ModalUpdate.module.css";
import stylesCheckbox from "./SingleTodo.module.css";

import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalUpdateProps {
  handleUpdateTodo: (e: React.FormEvent) => void;
  task: Todo;
  setTask: React.Dispatch<React.SetStateAction<Todo | null>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalUpdate({
  handleUpdateTodo,
  task,
  setTask,
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
        <label>Description:</label>
        <input
          type="text"
          value={task.description}
          onChange={e => setTask({ ...task, description: e.target.value })}
          required
        />

        <label className={stylesCheckbox.containerCheckbox}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => setTask({ ...task, completed: !task.completed })}
          />
          <span className={stylesCheckbox.checkmark}></span>
        </label>

        <button type="submit" className="btn">
          Update
        </button>
      </form>
    </div>
  );
}

export default ModalUpdate;
