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

//  specify the shape of the props passed to your component in TypeScript.
/*React.Dispatch: This represents a dispatch function, which is a type for the setter function returned by useState.

React.SetStateAction<boolean>: This part specifies the type of value the setter can accept. In this case, it means the setter (setIsLoading) can either:*/

export interface CompletedProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
