import imageUrl from "./images/trash.png";
import styles from "./ToDo.module.scss";
import PropTypes from "prop-types";

function ToDo({ todo, removeOneTodo }) {
  const onClick = () => {
    removeOneTodo(todo.id);
  };

  return (
    <li>
      {todo.text}
      <button onClick={onClick}>
        <img className={styles.trashButton} alt="delete todo" src={imageUrl} />
      </button>
    </li>
  );
}

ToDo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  }),
  removeToDo: PropTypes.func,
};

export default ToDo;
