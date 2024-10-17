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
  data: Todo[];
  setData: React.Dispatch<React.SetStateAction<Todo[]>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
