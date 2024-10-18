// src/utils/renderTodo.ts

import SingleTodo from "../components/SingleTodo";
import type { Todo } from "../types/Types";

interface RenderTodoProps {
  todo: Todo;
  handleComplete: (todo: Todo) => void;
  deleteTodo: (todoId: number) => void;
  handleShow: (todo: Todo) => void;
}

const renderTodo = ({
  todo,
  handleComplete,
  deleteTodo,
  handleShow,
}: RenderTodoProps) => {
  return (
    <SingleTodo
      key={todo.id}
      todo={todo}
      handleComplete={handleComplete}
      deleteTodo={deleteTodo}
      handleShow={handleShow}
    />
  );
};

export default renderTodo;
