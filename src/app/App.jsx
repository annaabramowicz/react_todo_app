import "../reset.css";
import React from "react";
import ToDoInput from "./ToDoInput/ToDoInput";
import AddButton from "./AddButton/AddButton";
import ToDosList from "./ToDoList/ToDosList";
import ClearAllButton from "./ClearAllButton/ClearAllButton";
import CurrentNumberOfTodos from "./CurrentNumberOfTodos/CurrentNumberOfTodos";
import ToggleButton from "./ToggleBotton/ToggleBotton";
import Flex from "../components/Flex/Flex";
import Heading from "../components/Heading/Heading";
import Box from "../components/Box/Box";
import { useState } from "react";
import { addTodo, removeAllTodos, removeTodo } from "store/todos/todos";
import { useDispatch } from "react-redux";
import { useColorModeValue } from "@chakra-ui/react";

const getNewId = () => `${new Date().getTime()}`;

function App() {
  const [currentInputValue, setCurrentInputValue] = useState("");
  const dispatch = useDispatch();
  const isButtonDisabled = !currentInputValue.trim();
  const formBackground = useColorModeValue("gray.200", "gray.600");

  const removeOneTodo = (todoId) => dispatch(removeTodo(todoId));
  const removeAllTodo = () => dispatch(removeAllTodos());

  const onAddButtonClick = () => {
    const newTodo = {
      id: getNewId(),
      text: currentInputValue,
    };
    dispatch(addTodo(newTodo));
    setCurrentInputValue("");
  };


  return (
    <>
      <Box margin="50px auto" w="500px">
        <Flex
          boxShadow="lg"
          borderRadius={10}
          direction="column"
          background={formBackground}
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
    </>
  );
}

export default App;
