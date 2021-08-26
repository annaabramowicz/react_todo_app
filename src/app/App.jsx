// import "./App.css";
import '../reset.css';
import React from 'react';
import { Heading } from '@chakra-ui/layout';
import ToDoInput from './ToDoInput/ToDoInput';
import AddButton from './AddButton/AddButton';
import ToDosList from './ToDoList/ToDosList';
import { addTodo } from 'store/todos/todos';
import ClearAllButton from './ClearAllButton/ClearAllButton';
import CurrentNumberOfTodos from './CurrentNumberOfTodos/CurrentNumberOfTodos';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const [currentInputValue, setCurrentInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const dispatch = useDispatch();
  const getNewId = () => `${new Date().getTime()}`;

  const isButtonDisabled = !currentInputValue.trim();

  const removeOneTodo = (todoId) => {
    setTodoList((currentTodoList) =>
      currentTodoList.filter((todo) => todo.id !== todoId)
    );
  };

  const onAddButtonClick = () => {
    const newTodo = {
      id: getNewId(),
      text: currentInputValue,
    };
    dispatch(addTodo(newTodo));
  };
  const removeAllTodo = () => {
    setTodoList([]);
  };

  return (
    <>
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
        <ToDosList removeTodo={removeOneTodo} />
      </section>
      <section>
        <ClearAllButton removeAll={removeAllTodo} />
      </section>
    </>
  );
}

export default App;
