// import "./App.css";
import "../reset.css";
import React from "react";
import ToDoInput from "./ToDoInput/ToDoInput";
import AddButton from "./AddButton/AddButton";
import ToDosList from "./ToDoList/ToDosList";
import ClearAllButton from "./ClearAllButton/ClearAllButton";
import CurrentNumberOfTodos from "./CurrentNumberOfTodos/CurrentNumberOfTodos";
import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import Flex from "../components/Flex/Flex";
import Heading from "../components/Heading/Heading";

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
      <Flex
        direction="column"
        background="gray.100"
        height="auto"
        wight="200"
        p="10"
      >
        <Heading>React To Do App</Heading>
        <section>
          <Flex w="300px" p={7}>
            <ToDoInput
              setValue={setCurrentInputValue}
              currentInputValue={currentInputValue}
            />
            <AddButton
              onButtonClick={onAddButtonClick}
              isDisabled={isButtonDisabled}
            />
          </Flex>
        </section>
        <CurrentNumberOfTodos listOfTodos={todoList} />
        <ToDosList todoList={todoList} removeTodo={removeOneTodo} />
        <ClearAllButton removeAll={removeAllTodo} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
