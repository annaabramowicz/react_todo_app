// import trash from './images/trash.png';
import "./App.css";
import "./reset.css";
import React from "react";
import ToDoInput from "./Components/ToDoInput/ToDoInput";
import AddButton from "./Components/AddButton/AddButton";
import ToDosList from "./Components/ToDoList/ToDosList";
import { useState } from "react";

function App() {
  const [currentInputValue, setCurrentInputValue] = useState("Insert your ToDo");
  const [newToDo, setNewToDo] = useState('');

  const onAddButtonClick = () => {
    setNewToDo(currentInputValue);
    setCurrentInputValue('');
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
        </div>
      </section>
      <section>
        <ToDosList
        appliedToDo={newToDo}
        />
      </section>
    </main>
  );
}

export default App;

// const getNewId = () =>  new Date().getTime();
// const addButton = document.getElementById('add');
// const todosWrapper = document.getElementById('list-of-todos');
// const newTodoInput = document.getElementById('new-todo-input');

// const state = {
//   todos: [],
// };

// const addNewTodoInUI = (todosWrapper, todo) => {
//   const listElem = document.createElement('li');
//   const spanElem = document.createElement('span');
//   const buttonElem = document.createElement('button');
//   const imgElem = document.createElement('img');

//   // imgElem.setAttribute('src', '/images/trash.png');
//   imgElem.classList.add('image');
//   spanElem.innerText = todo.text;

//   buttonElem.appendChild(imgElem);
//   buttonElem.addEventListener('click', () => removeTodo(todo.id));
//   listElem.appendChild(spanElem);
//   listElem.appendChild(buttonElem);
//   todosWrapper.appendChild(listElem);
// };

// const getTodosFromStateAndShowInUI = () => {
//      const { todos } = state;
//   todosWrapper.innerHTML = '';

//  todos.forEach((todo) => {
//     addNewTodoInUI(todosWrapper, todo);
//   });
// };

// const addNewTodo = () => {
//   const newTodo = {
//     id: getNewId(),
//     text: newTodoInput.value,
//   };
//   state.todos = [...state.todos, newTodo];
//   newTodoInput.value = '';
//   getTodosFromStateAndShowInUI();
// };
// const removeTodo = (id) => {
//   state.todos = state.todos.filter((t) => t.id !== id);
//   getTodosFromStateAndShowInUI();
// };
// addButton.addEventListener('click', addNewTodo);

// <div className="App">
//   <div className="header">
//   <div className="title">To Do App </div>
//   <div className="input__block">
//     <input type="text" id="new-todo-input" />
//     <button id="add">Add</button>
//   </div>
// </div>
// <div id="list-of-todos"></div>

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
//   </div>
