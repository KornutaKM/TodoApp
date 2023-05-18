import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((todo) => (
          <Todo key={todo.id} deleteTodo={deleteTodo} todo={todo} toggleTodo={toggleTodo} />
        ))
      )}
    </div>
  );
};

export default TodoList;
