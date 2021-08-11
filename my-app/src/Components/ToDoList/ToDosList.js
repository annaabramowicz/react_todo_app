import ToDo from "./ToDo/ToDo";
import { useState, useCallback, useEffect } from "react";

function ToDosList({ appliedToDo }) {
  const [toDosList, setToDosList] = useState([]);

  const generateNewList = useCallback(() => {
    let newList = ['jakis todo'];
    newList.push(appliedToDo);
    return newList;
  }, [appliedToDo]);

  useEffect(() => {
    setToDosList(generateNewList());
  }, [appliedToDo, generateNewList]);

  return (
    <ul>
      {toDosList.map((toDo) => (
        <ToDo key={toDo} toDo={toDo} />
      ))}
    </ul>
  );
}
export default ToDosList;
