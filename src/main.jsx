import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoProvider from "./context/ToDoContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <TodoProvider>
  //   <App />
  // </TodoProvider>

  <ThemeProvider>
    <App/>
  </ThemeProvider>
);
