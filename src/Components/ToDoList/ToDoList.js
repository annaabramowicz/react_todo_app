import ToDo from "./ToDo/ToDo";

function ToDoList({ toDoList, removeToDo }) {

  return (
    <ul>
      {toDoList.map((toDo) => (
        <ToDo key={toDo.id} toDo={toDo} removeOneToDo={removeToDo} />
      ))}
    </ul>
  );
}
export default ToDoList;
