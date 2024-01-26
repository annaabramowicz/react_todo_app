import List from "Components/List/List";

import ToDo from "./ToDo/ToDo";

function ToDoList({ toDoList, removeToDo }) {
  return (
    <List>
      {toDoList.map((toDo) => (
        <ToDo key={toDo.id} toDo={toDo} removeOneToDo={removeToDo} />
      ))}
    </List>
  );
}
export default ToDoList;
