import React, { useState } from "react";
import s from "./TodoForm.module.css";
import Button from "../UI/Button";

const TodoForm = ({ addTodoHandler }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text) {
      addTodoHandler(text);
    } else {alert('Введите задачу')}
    setText("");
  };
  
  return (
    <form className={s.form} onSubmit={onSubmitHandler}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className={s.input}
        placeholder="Введите задачу"
      />
      <Button title={'creating new todo'} disabled={false} className={s.button}>
        Создать
      </Button>
    </form>
  );
};

export default TodoForm;
