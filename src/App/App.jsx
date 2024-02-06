import "../reset.css";
import React from "react";
import ToDoInput from "App/ToDoInput/ToDoInput";
import AddButton from "App/AddButton/AddButton";
import ToDoList from "App/ToDoList/ToDoList";
import ClearAllButton from "App/ClearAllButton/ClearAllButton";
import CurrentNumberOfToDo from "App/CurrentNumberOfToDo/CurrentNumberOfToDo";
import Heading from "Components/Heading/Heading";
import {
  addTodo,
  getTodos,
  removeAllTodos,
  removeTodo,
} from "./store/todos/todos";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Flex from "Components/Flex/Flex";
import ToggleButton from "Components/Buttons/ToggleButton/ToggleButton";

const getNewId = () => `${new Date().getTime()}`;

function App() {
  const [currentInputValue, setCurrentInputValue] = useState("");
  // const [toDoList, setToDoList] = useState([]);
  const dispatch = useDispatch();
  const todoList = useSelector(getTodos);
  const isButtonDisabled = !currentInputValue.trim();
  // const isClearButtonDisabled = !toDoList.length;

  const onAddButtonClick = () => {
    const newTodo = {
      id: getNewId(),
      text: currentInputValue,
    };
    dispatch(addTodo(newTodo));
  };

  const removeToDo = (toDoId) => {
    dispatch(removeTodo(toDoId));
  };

  const removeAllTodo = () => {
    dispatch(removeAllTodos);
  };

  return (
    <React.Fragment>
      <ToggleButton position="fixed" right="5px" top="5px" />
      <Flex justifyContent="center" m={10}>
        <Flex
          flexDirection="column"
          justifyContent="start-flex"
          alignItems="center"
          border={"1px"}
          borderRadius="md"
          maxW="md"
          borderColor="gray.600"
          minH={200}
          pr={10}
          pl={10}
        >
          <Heading p={2}>React To Do App</Heading>
          <Flex justifyContent="center" pb={2}>
            <ToDoInput
              setValue={setCurrentInputValue}
              currentInputValue={currentInputValue}
            />
            <AddButton
              onButtonClick={onAddButtonClick}
              isDis={isButtonDisabled}
            />
          </Flex>
          <Heading size="sx" pb={2}>
            <CurrentNumberOfToDo todoList={todoList} />
          </Heading>
          <ClearAllButton
            removeAll={removeAllTodo}
            // isDisClear={isClearButtonDisabled}
            p={2}
          />
          <ToDoList removeToDo={removeToDo} />
        </Flex>
      </Flex>
    </React.Fragment>
  );
}

export default App;
