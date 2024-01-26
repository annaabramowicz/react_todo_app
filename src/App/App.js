import "../reset.css";
import React from "react";
import ToDoInput from "App/ToDoInput/ToDoInput";
import AddButton from "App/AddButton/AddButton";
import ToDoList from "App/ToDoList/ToDoList";
import ClearAllButton from "App/ClearAllButton/ClearAllButton";
import CurrentNumberOfToDo from "App/CurrentNumberOfToDo/CurrentNumberOfToDo";
import { useState } from "react";
import Heading from "Components/Heading/Heading";

const getNewId = () => `${new Date().getTime()}`;

function App() {
  const [currentInputValue, setCurrentInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const isButtonDisabled = !currentInputValue.trim();
  const isClearButtonDisabled = !toDoList.length;

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
      <Heading>React To Do App</Heading>
      <section>
        <div>
          <ToDoInput
            setValue={setCurrentInputValue}
            currentInputValue={currentInputValue}
          />
          <AddButton
            onButtonClick={onAddButtonClick}
            isDis={isButtonDisabled}
          />
        </div>
        <Heading size="sx">
          <CurrentNumberOfToDo toDoList={toDoList} />
        </Heading>
        <section>
          <ClearAllButton
            removeAll={removeAllToDo}
            isDisClear={isClearButtonDisabled}
          />
        </section>
      </section>
      <section>
        <ToDoList toDoList={toDoList} removeToDo={removeToDo} />
      </section>
    </main>
  );
}

export default App;
