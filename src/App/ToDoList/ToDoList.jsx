import List from "Components/List/List";
import ToDo from "./ToDo/ToDo";
import { useSelector } from "react-redux";
import { getTodos } from "App/store/todos/todos";

function ToDoList({ removeToDo }) {
  const todoList = useSelector(getTodos);
  return (
    <List p={2}>
      {todoList.map((toDo) => (
        <ToDo key={toDo.id} toDo={toDo} removeOneToDo={removeToDo} />
      ))}
    </List>
  );
}
export default ToDoList;
