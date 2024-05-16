import React from "react";
import "./Todo.css";

function TodoForm({ title, content, onChangeTitle, onChangeContent, addTodo }) {
  return (
    <form id='todo-form' onSubmit={addTodo}>
      <input type='text' placeholder='등록할 제목을 적어주세요' value={title} onChange={onChangeTitle} />
      <input type='text' placeholder='등록할 내용을 적어주세요' value={content} onChange={onChangeContent} />
      <button type='submit'>추가하기</button>
    </form>
  );
}

export default TodoForm;
