import { createContext } from "react";
import type { Todo } from "../models/Todo";

export interface ITodosContext {
  todos: Todo[];
  addTodo: (title: string, desc: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
});
