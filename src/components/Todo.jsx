import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: title,
      content: content,
      isDone: false,
    };
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요");
    } else {
      setTodos((prev) => [...prev, newTodo]);
      setTitle("");
      setContent("");
    }
  };

  const deleteTodo = (id) => {
    if (window.confirm("정말 삭제하실건가요?")) {
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
    setTodos(updatedTodos);
  };

  return (
    <div id='todo-container'>
      <TodoForm title={title} content={content} onChangeTitle={onChangeTitle} onChangeContent={onChangeContent} addTodo={addTodo} />
      <h2>Working...</h2>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} isDone={false} />
      <h2>Done!</h2>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} isDone={true} />
    </div>
  );
}

export default Todo;
