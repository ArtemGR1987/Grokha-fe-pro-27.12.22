import React from 'react';

function TodoItem({ index, todo, handleToggleTodo }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggleTodo(index)}
      />
      <span>{todo.text}</span>
    </div>
  );
}

export default TodoItem;
