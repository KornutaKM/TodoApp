import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else return { ...todo };
      })
    );
  };

  const resetAllTodosHandlers = () => {
    setTodos(
      todos.map((todo) => {
        return { ...todo, isCompleted: false };
      })
    );
  };

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const deleteCompletedTodosHandlers = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false));
  };

  let completedTodos = todos.filter((todo) => todo.isCompleted === true);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodosActions
        completedTodos={completedTodos}
        todos={todos}
        deleteAllTodos={deleteCompletedTodosHandlers}
        resetAllTodos={resetAllTodosHandlers}
      />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodoHandler}
        deleteTodo={deleteTodoHandler}
      />
      <div>
        {completedTodos.length === 1
          ? `You have completed ${completedTodos.length} Todo`
          : completedTodos.length > 1
          ? `You have completed ${completedTodos.length} Todos`
          : ""}
      </div>
    </div>
  );
}

export default App;
