export interface Todo {
  id: number;
  description: string;
  completed: boolean;
  meta: {
    createdAt: Date;
  };
}

export interface ApiTodo {
  id: number;
  description: string;
  completed: number;
  meta: {
    createdAt: Date;
  };
}

export interface CompletedProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
