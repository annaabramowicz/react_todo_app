import imageUrl from "./images/trash.png";
import styles from "./ToDo.module.scss";


function ToDo({ toDo }) {
  return (
    <li>
      {toDo} <img className={styles.trashButton} alt="" src={imageUrl} />
    </li>
  );
}
export default ToDo;
