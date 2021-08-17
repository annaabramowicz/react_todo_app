import ToDo from "./ToDo/ToDo";

function ToDosList({ todoList, removeTodo }) {

  const removeToDo = (todo) => {
    removeToDo(todo);
  };
  return (
    <ul>
      {todoList.map((todo) => (
        <ToDo key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}
export default ToDosList;
