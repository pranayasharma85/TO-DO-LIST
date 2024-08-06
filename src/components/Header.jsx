import { useContext } from "react";
import { TodoContext } from "../context/ToDoContext";

const Header = () => {
  const { todos } = useContext(TodoContext);

  return <h1> To do count {todos.length}</h1>;
};

export default Header;
