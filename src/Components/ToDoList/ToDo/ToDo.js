import imageUrl from "./images/trash.png";
import styles from "./ToDo.module.scss";
import PropTypes from "prop-types";

function ToDo({ todo, removeToDo }) {
  const onClick = (todo) => {
    removeToDo(todo);
  };

  return (
    <li>
      {todo.text}
      <button onClick={onClick}>
        <img className={styles.trashButton} alt="" src={imageUrl} />
      </button>
    </li>
  );
}
ToDo.propTypes = {
  todo: PropTypes.object,
  removeToDo: PropTypes.func,
};
export default ToDo;
