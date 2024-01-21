import "./App.css";
import "./reset.css";
import React from "react";
import ToDoInput from "./Components/ToDoInput/ToDoInput";
import AddButton from "./Components/AddButton/AddButton";
import ToDoList from "./Components/ToDoList/ToDoList";
import { useState } from "react";
import DislikeLikeButton from "./Components/Test/AddButton/DislikeLikeButton/DislikeLikeButton";
import ClearAllButton from "./Components/ClearAllButton/ClearAllButton";

function App() {
  const [currentInputValue, setCurrentInputValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [likes, setLikes] = useState(0);
  const [disLikes, setDisLikes] = useState(0);

  const like = () => {
    setLikes(likes + 1);
  };
  const disLike = () => {
    setDisLikes(disLikes - 1);
  };
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
  }

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
          <br />
          <br />
          <DislikeLikeButton name="Like" callback={like} count={likes} />
          <DislikeLikeButton
            name="DisLike"
            callback={disLike}
            count={disLikes}
          />
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
