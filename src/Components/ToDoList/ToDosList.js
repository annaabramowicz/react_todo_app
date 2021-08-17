import ToDo from "./ToDo/ToDo";

function ToDosList({ todoList }) {
  return (
    <ul>
      {todoList.map((toDo) => (
        <ToDo key={toDo} toDo={toDo} />
      ))}
    </ul>
  );
}
export default ToDosList;
