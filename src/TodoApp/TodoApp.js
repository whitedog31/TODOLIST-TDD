import React, { useState } from "react";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "TDD 배우기",
      done: true,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true,
    },
  ]);
  return (
    <div>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}
