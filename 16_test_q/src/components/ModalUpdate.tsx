import type { Todo } from "../types/Types";
import styles from "./ModalUpdate.module.css";
import stylesCheckbox from "./SingleTodo.module.css";

interface ModalUpdateProps {
  handleUpdateTodo: (e: React.FormEvent) => void;
  selectedTodo: Todo;
  setSelectedTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
}

function ModalUpdate({
  handleUpdateTodo,
  selectedTodo,
  setSelectedTodo,
}: ModalUpdateProps) {
  return (
    <div className={styles.innerContainerModal}>
      <div className={styles.containerTitleClose}>
        <h3>Update Todo</h3>
      </div>

      <form onSubmit={handleUpdateTodo} className={styles.containerFormUpdate}>
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
              setSelectedTodo({
                ...selectedTodo,
                description: e.target.value,
              })
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
