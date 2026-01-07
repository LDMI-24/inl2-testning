import { useContext, useState, type FormEvent } from "react";
import { TodosContext } from "../contexts/TodosContext";
import "./AddTodo.css"

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { addTodo } = useContext(TodosContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addTodo(title, desc);
    setTitle("");
    setDesc("");

  };

  return (
    <>
      
      <form onSubmit={handleSubmit}>
        <span className="title">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </span>
        <span className="description">
        <label htmlFor="desc">Description:</label>
        <input
          type="text"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        </span>
        <button>Save</button>
      </form>
    </>
  );
};