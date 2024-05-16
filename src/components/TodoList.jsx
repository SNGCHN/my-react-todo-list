import React from "react";
import TodoItem from "./TodoItem";
import "./Todo.css";

function TodoList({ todos, deleteTodo, toggleTodo, isDone }) {
  return (
    <ul id={isDone ? "done-todo" : "working-todo"}>
      {todos
        .filter((todo) => todo.isDone === isDone)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        ))}
    </ul>
  );
}

export default TodoList;
