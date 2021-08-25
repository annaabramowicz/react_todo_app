import imageUrl from "./images/trash.png";
import styles from "./ToDo.module.scss";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/button";

function ToDo({ todo, removeOneTodo }) {
  const onClick = () => {
    removeOneTodo(todo.id);
  };

  return (
    <li>
      {todo.text}
      <Button onClick={onClick}>
        <img className={styles.trashButton} alt="delete todo" src={imageUrl} />
      </Button>
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
