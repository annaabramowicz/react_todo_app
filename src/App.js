import "./reset.css";
import "./App.css";
import React from "react";
import ToDoInput from "App/ToDoInput/ToDoInput";
import AddButton from "App/AddButton/AddButton";
import ToDoList from "App/ToDoList/ToDoList";
import ClearAllButton from "App/ClearAllButton/ClearAllButton";
import CurrentNumberOfToDo from "App/CurrentNumberOfToDo/CurrentNumberOfToDo";
import { useState } from "react";

const getNewId = () => `${new Date().getTime()}`;

function App() {
  const [currentInputValue, setCurrentInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const isButtonDisabled = !currentInputValue.trim();

  const onAddButtonClick = () => {
    setToDoList((currentToDoList) => [
      ...currentToDoList,
      {
        id: getNewId(),
        text: currentInputValue,
      },
    ]);
    setCurrentInputValue("");
  };

  const removeToDo = (toDoId) => {
    setToDoList((currentToDoList) =>
      currentToDoList.filter((todo) => todo.id !== toDoId)
    );
  };

  const removeAllToDo = () => {
    setToDoList([]);
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
          <CurrentNumberOfToDo toDoList={toDoList} />
        </div>
      </section>
      <section>
        <ToDoList toDoList={toDoList} removeToDo={removeToDo} />
      </section>
      <section>
        <ClearAllButton removeAll={removeAllToDo} />
      </section>
    </main>
  );
}

export default App;
