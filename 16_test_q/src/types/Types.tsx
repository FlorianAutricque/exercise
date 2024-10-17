export interface Todo {
  id: number;
  description: string;
  completed: boolean;
  meta: Record<string, unknown>;
}

export interface CompletedProps {
  data: Todo[];
  setData: React.Dispatch<React.SetStateAction<Todo[]>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
