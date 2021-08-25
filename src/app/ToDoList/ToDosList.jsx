import ToDo from "./ToDo/ToDo";
import PropTypes from "prop-types";

function ToDosList({ todoList, removeTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <ToDo key={todo.id} todo={todo} removeOneTodo={removeTodo} />
      ))}
    </ul>
  );
}

ToDosList.propTypes = {
  todoList: PropTypes.array,
  removeToDo: PropTypes.func,
};

export default ToDosList;
