import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    input.trim(" ");
    const newTodo = {
      name: input,
      id: Math.random(),
    };
    setTodoList([...todoList, newTodo]);
    setInput("");
  };
  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="New Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      <ul className="todos-list">
        {todoList.map((todo) => (
          <li key={todo.id} className="todo">
            <span>{todo.name}</span>
            <button onClick={() => removeTodo(todo.id)} className="close">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
