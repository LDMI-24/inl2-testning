import { useState, useEffect } from "react";
import { Todo } from "../models/Todo";
import { TodosContext, type ITodosContext } from "../contexts/TodosContext";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";


export const TodoApp = () => {
  //For testing example data, clear localStorage first by using this:
  //localStorage.removeItem("todos")
  // Or clear it manually via the browser, but that is not always convinient
  const stored = localStorage.getItem("todos")

  const [state, setState] = useState<ITodosContext>({
    todos: stored 
    ? JSON.parse(stored)
    : [
    new Todo ("Go to the shop", "Get veggies, meat, milk, and eggs", true),
    new Todo ("Cook dinner", "Check fridge & then decide", false),
    ],
    addTodo: () => {},
    removeTodo: () => {},
    toggleTodo: () => {},

  });

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  state.addTodo = (title: string, desc: string) => {
    setState({ ...state, todos: [...state.todos, new Todo(title, desc)] });
  };

  state.removeTodo = (id: string) => {
  setState(prev => {
    const todo = prev.todos.find(t => t.id === id);

    // If todo doesn't exist or is not done, do nothing
    if (!todo || !todo.isDone) {
      return prev;
    }

    return {
      ...prev,
      todos: prev.todos.filter(t => t.id !== id),
    };
  });
};

  state.toggleTodo = (id: string) => {
    setState({
      ...state,
      todos: state.todos.map((t) => {
        if (t.id === id) return { ...t, isDone: !t.isDone };
        return t;
      }),
    });
  };

  return (
    <TodosContext.Provider value={state}>
      <h2 className="todoTitle">Add a ToDo</h2>
      <AddTodo />
      <h2 className="todoTitle">ToDo's</h2>
      <Todos />
    </TodosContext.Provider>
  );
};
