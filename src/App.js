// import trash from './images/trash.png';
import "./App.css";
import "./reset.css";
import React from "react";
import ToDoInput from "./Components/ToDoInput/ToDoInput";
import AddButton from "./Components/AddButton/AddButton";
import ToDosList from "./Components/ToDoList/ToDosList";
import { useState } from "react";

function App() {
  const [currentInputValue, setCurrentInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const isButtonDisabled = !currentInputValue.trim();

  const onAddButtonClick = () => {
    setTodoList((currentTodoList) => [...currentTodoList, currentInputValue]);
    setCurrentInputValue("");
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
        </div>
      </section>
      <section>
        <ToDosList todoList={todoList} />
      </section>
    </main>
  );
}

export default App;