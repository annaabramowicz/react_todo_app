import imageUrl from "./images/trash.png";

function ToDo({ toDo }) {
  return (
    <li>
      {toDo} <img alt="" src={imageUrl} />
    </li>
  );
}
export default ToDo;
