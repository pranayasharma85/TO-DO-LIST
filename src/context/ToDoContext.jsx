import { useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, title: "Create to do list App", isCompleted: false },
    { id: 2, title: "Create ReactApp using Vite", isCompleted: false },
  ]);

  const addTodo=(todo)=>{
    setTodos([...todos, todo]);
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo}}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
