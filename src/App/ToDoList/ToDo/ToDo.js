import ListItem from "Components/List/ListItem/ListItem";
import ListIcon from "Components/List/ListIcon/ListIcon";
import CloseButton from "Components/CloseButton/CloseButton";
import { MdCheckCircle } from "react-icons/md";

const ToDo = ({ toDo, removeOneToDo }) => {
  const onClick = () => {
    removeOneToDo(toDo.id);
  };
  return (
    <ListItem spacing={3}>
      <ListIcon as={MdCheckCircle} color="green.500" />
      {toDo.text}
      <button className="trash" onClick={onClick}>
        <CloseButton />
      </button>
    </ListItem>
  );
};
export default ToDo;
