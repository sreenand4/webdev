import { create } from "zustand";

interface Todo {
  id: string;
  title: string;
}

interface TodosState {
  todos: Todo[];
  todo: Todo;
  setTodo: (todo: Todo) => void;
  addTodo: () => void;
  deleteTodo: (id: string) => void;
  updateTodo: () => void;
}

export const useTodosStore = create<TodosState>((set) => ({
  todos: [
    { id: "1", title: "Learn Zustand Store" },
    { id: "2", title: "Learn Zustand Hooks" },
  ],
  todo: { id: "-1", title: "Learn Zustand Slices" },
  setTodo: (todo) => set({ todo }),
  addTodo: () =>
    set((state) => ({
      todos: [
        ...state.todos,
        { ...state.todo, id: new Date().getTime().toString() },
      ],
      todo: { id: "-1", title: "" },
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
  updateTodo: () =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === state.todo.id ? state.todo : t)),
      todo: { id: "-1", title: "" },
    })),
}));
