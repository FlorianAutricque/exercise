interface ModalUpdateProps {
  handleUpdate: (e: React.FormEvent) => void;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  completed: boolean;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalUpdate({
  handleUpdate,
  description,
  setDescription,
  completed,
  setCompleted,
  setShow,
}: ModalUpdateProps) {
  return (
    <div>
      <h1>Update Task</h1>
      <form onSubmit={handleUpdate}>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <label>
          Completed:
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
          />
        </label>
        <button type="submit">Update task</button>

        <button onClick={() => setShow(false)}>Close</button>
      </form>
    </div>
  );
}

export default ModalUpdate;
