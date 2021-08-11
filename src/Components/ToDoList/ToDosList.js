import ToDo from "./ToDo/ToDo";
import { useState, useCallback, useEffect } from "react";

function ToDosList({ appliedToDo }) {
  const [toDosList, setToDosList] = useState([]);

  useEffect(() => {
    setToDosList([...toDosList, appliedToDo ]);
  }, [appliedToDo, toDosList]);

  return (
    <ul>
      {toDosList.map((toDo) => (
        <ToDo key={toDo} toDo={toDo} />
      ))}
    </ul>
  );
}
export default ToDosList;
