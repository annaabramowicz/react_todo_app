const ToDo = ({ toDo, removeOneToDo }) => {
  const onClick = () => {
    removeOneToDo(toDo.id);
  };
  return (
    <li>
      {toDo.text}
      <button className="trash" onClick={onClick}>
        TRASH
      </button>
    </li>
  );
};
export default ToDo;
