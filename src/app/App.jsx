import "../reset.css";
import React from "react";
import ToDoInput from "./ToDoInput/ToDoInput";
import AddButton from "./AddButton/AddButton";
import ToDosList from "./ToDoList/ToDosList";
import ClearAllButton from "./ClearAllButton/ClearAllButton";
import CurrentNumberOfTodos from "./CurrentNumberOfTodos/CurrentNumberOfTodos";
import { useState } from "react";
import { addTodo, removeAllTodos, removeTodo } from "store/todos/todos";
import { useDispatch } from "react-redux";
import Flex from "../components/Flex/Flex";
import Heading from "../components/Heading/Heading";
import Box from "../components/Box/Box";
import ToggleButton from "../components/Buttons/ToggleBotton/ToggleBotton";

function App() {
  const [currentInputValue, setCurrentInputValue] = useState("");
  const dispatch = useDispatch();
  const getNewId = () => `${new Date().getTime()}`;
  const isButtonDisabled = !currentInputValue.trim();

  const removeOneTodo = (todoId) => {
    dispatch(removeTodo(todoId));
  };

  const onAddButtonClick = () => {
    const newTodo = {
      id: getNewId(),
      text: currentInputValue,
    };
    dispatch(addTodo(newTodo));
    setCurrentInputValue("");
  };
  const removeAllTodo = () => {
    dispatch(removeAllTodos());
  };

  return (
    <React.Fragment>
      <Box>
        <Flex
          boxShadow="lg"
          borderRadius={10}
          direction="column"
          background="gray.300"
          height="auto"
        >
          <Heading>React To Do App</Heading>
          <Flex w="300px" p={5}>
            <ToDoInput
              setValue={setCurrentInputValue}
              currentInputValue={currentInputValue}
            />
            <AddButton
              onButtonClick={onAddButtonClick}
              isDisabled={isButtonDisabled}
            />
          </Flex>
        </Flex>
        <Flex mb={5}>
          <CurrentNumberOfTodos />
          <ClearAllButton removeAll={removeAllTodo} />
        </Flex>
        <ToDosList removeTodo={removeOneTodo} />
        <ToggleButton>Toggle Mode</ToggleButton>
      </Box>
    </React.Fragment>
  );
}

export default App;
