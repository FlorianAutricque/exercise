interface Todo {
  id: number;
  description: string;
  completed: boolean;
  meta: Record<string, unknown>;
}

export default Todo;

// export interface ApiResponseTask {
//   id: number;
//   description: string;
//   completed: number; // From the API, this is a number (0 or 1)
//   meta: Record<string, unknown>;
// }
