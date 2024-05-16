import React from "react";
import "./Todo.css";

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  const maxText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <li key={todo.id}>
      <div>
        <h3>{maxText(todo.title, 20)}</h3>
        <p>{maxText(todo.content, 100)}</p>
      </div>
      <button className='delete' onClick={() => deleteTodo(todo.id)}>
        삭제
      </button>
      <button className={todo.isDone ? "cancel" : "complete"} onClick={() => toggleTodo(todo.id)}>
        {todo.isDone ? "취소" : "완료"}
      </button>
    </li>
  );
}

export default TodoItem;
