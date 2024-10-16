interface Todo {
  id: number;
  description: string;
  completed: boolean;
  meta: Record<string, unknown>;
}

export default Todo;
