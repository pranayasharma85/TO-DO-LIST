import { useContext } from "react";
import { TodoContext } from "./context/ToDoContext";
import Header from "./components/Header";
import { useState } from "react";
import ThemedComponent from "./context/ThemeComponent";

function App() {
  // const { todos, addTodo} = useContext(TodoContext);
  // const [text, setText] = useState("");

  // console.log(todos);

  // return (
  //   <>
  //     <Header />
  //     <input
  //       type="text"
  //       placeholder="Add Todo"
  //       onChange={(e) => setText(e.target.value)}
  //     />
  //     <button
  //       onClick={() =>
  //         addTodo({
  //           id: todos.length + 1,
  //           title: text,
  //           isCompleted: false,
  //         })
  //       }
  //     >
  //       Submit
  //     </button>
  //     <ul>
  //       {todos.map((todo) => (
  //         <li key={todos.id}>{todo.title}</li>
  //       ))}
  //     </ul>
  //   </>
  // );

  return (
    <div>
      <h1>Welcome to My App</h1>
      <ThemedComponent />
    </div>
  );

}

export default App;
