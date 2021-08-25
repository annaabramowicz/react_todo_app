import "./App.css";
import "./reset.css";
import React from "react";
import ToDoInput from "./Components/ToDoInput/ToDoInput";
import AddButton from "./Components/AddButton/AddButton";
import ToDosList from "./Components/ToDoList/ToDosList";
import ClearAllButton from "./Components/ClearAllButton/ClearAllButton";
import CurrentNumberOfTodos from "./Components/CurrentNumberOfTodos/CurrentNumberOfTodos";

import { useState } from "react";


function App() {
  const [currentInputValue, setCurrentInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const getNewId = () => `${new Date().getTime()}`;

  const isButtonDisabled = !currentInputValue.trim();

  const removeOneTodo = (todoId) => {
    setTodoList((currentTodoList) =>
      currentTodoList.filter((todo) => todo.id !== todoId)
    );
  };

  const onAddButtonClick = () => {
    setTodoList((currentTodoList) => [
      ...currentTodoList,
      {
        id: getNewId(),
        text: currentInputValue,
      },
    ]);
    setCurrentInputValue("");
  };
  const removeAllTodo = () => {
    setTodoList([]);
  };

  return (
    <main>
      <header>React To Do App</header>
      <section>
        <div>
          <ToDoInput
            setValue={setCurrentInputValue}
            currentInputValue={currentInputValue}
          />
          <AddButton
            onButtonClick={onAddButtonClick}
            isDisabled={isButtonDisabled}
          />
          <CurrentNumberOfTodos listOfTodos={todoList} />
        </div>
      </section>
      <section>
        <ToDosList todoList={todoList} removeTodo={removeOneTodo} />
      </section>
      <section>
        <ClearAllButton removeAll={removeAllTodo} />
      </section>
    </main>
  );
}

export default App;
