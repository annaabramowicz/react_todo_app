// import "./App.css";
import "./reset.css";
import React from "react";
import ToDoInput from "./app/ToDoInput/ToDoInput";
import AddButton from "./app/AddButton/AddButton";
import ToDosList from "./app/ToDoList/ToDosList";
import ClearAllButton from "./app/ClearAllButton/ClearAllButton";
import CurrentNumberOfTodos from "./app/CurrentNumberOfTodos/CurrentNumberOfTodos";
import { Heading } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";
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
    <ChakraProvider>
      <Heading>React To Do App</Heading>
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
    </ChakraProvider>
  );
}

export default App;
