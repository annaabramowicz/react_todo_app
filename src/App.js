import "./App.css";
import "./reset.css";
import React from "react";
import ToDoInput from "./Components/ToDoInput/ToDoInput";
import AddButton from "./Components/AddButton/AddButton";
import ToDoList from "./Components/ToDoList/ToDoList";
import { useState } from "react";
import ClearAllButton from "./Components/ClearAllButton/ClearAllButton";
import CurrentNumberOfToDo from "./Components/CurrentNumberOfToDo/CurrentNumberOfToDo";

function App() {
  const [currentInputValue, setCurrentInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const getNewId = () => `${new Date().getTime()}`;

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
          <AddButton onButtonClick={onAddButtonClick} />
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
