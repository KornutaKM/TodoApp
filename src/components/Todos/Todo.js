import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import React from "react";
import s from "./Todo.module.css";

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className={`${s.todo} ${todo.isCompleted ? s.completedTodo: ''}`}>
      <div className={s.text}>
        <RiTodoFill className={s.todoIcon} />
        {todo.text}
      </div>
      <div className={s.stateicons}>
        <RiDeleteBin2Line className={s.deleteicon} onClick={() => deleteTodo(todo.id)}/>
        <FaCheck className={s.checkicon} onClick={(id)=> toggleTodo(todo.id)}  />
      </div>
    </div>
  );
};

export default Todo;
