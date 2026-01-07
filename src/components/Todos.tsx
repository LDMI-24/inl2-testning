import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
import "./Todos.css"


export const Todos = () => {
  const { todos, removeTodo, toggleTodo } = useContext(TodosContext) 

  const sortedTodos = [...todos].sort((a, b) => {
  // sort unfinished todos before finished
  if (a.isDone !== b.isDone) {
    return Number(a.isDone) - Number(b.isDone);
  }
  // sort todos newest first, both within the categories done & not done
  return b.date - a.date;
});

  return (
    <>
      <ul className="Todos">
        {sortedTodos.map((t) => 
        <li key={t.id} className={`todo ${t.isDone ? "done" : ""}`}>       
          <h2>{t.title}</h2>
          <p className="todoDesc">{t.desc}</p>
          <input className="todoDoneToggle" type="checkbox" checked={t.isDone} onChange={() => toggleTodo(t.id)}/>
          <button disabled={!t.isDone} className="delBtn" onClick={() => removeTodo(t.id)}>Delete</button>
        </li>        
        )}
      </ul>
    </>
  );
};
