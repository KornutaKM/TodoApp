import React from "react";
import s from "./TodosActions.module.css";
import Button from "../UI/Button";
import { RiDeleteBin5Line, RiRestartLine } from "react-icons/ri";

const TodosActions = ({ todos, deleteAllTodos, resetAllTodos, completedTodos }) => {
  
  return (
    <div className={s.buttons}>
      <Button
        disabled={ !todos.length ?  true : completedTodos.length ?  false : true}
        title="Delete completed todos"
        onClick={deleteAllTodos}
      >
        <RiDeleteBin5Line />
      </Button>
      <Button
        disabled={!completedTodos.length}
        title="Reset all completed todos"
        onClick={resetAllTodos}
      >
        <RiRestartLine />
      </Button>
    </div>
  );
};

export default TodosActions;
