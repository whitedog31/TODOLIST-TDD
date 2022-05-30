import React from "react";

export default function TodoItem({ todo }) {
  const { id, text, done } = todo;

  return (
    <li>
      <span>{text}</span>
      <button>삭제</button>
    </li>
  );
}
