import ListIcon from "Components/List/ListIcon/ListIcon";
import { MdCheckCircle } from "react-icons/md";
import Flex from "Components/Flex/Flex";
import Button from "Components/Button/Button";

const ToDo = ({ toDo, removeOneToDo }) => {
  const onClick = () => {
    removeOneToDo(toDo.id);
  };
  return (
    <Flex justifyContent="center" alignItems="center" w={300}>
      <ListIcon as={MdCheckCircle} color="green.500" />
      {toDo.text}
      <Button className="trash" onClick={onClick} />
    </Flex>
  );
};  
export default ToDo;
