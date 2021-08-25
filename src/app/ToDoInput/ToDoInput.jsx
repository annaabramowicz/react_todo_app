import PropTypes from "prop-types";
import { Input } from "@chakra-ui/input";

const ToDoInput = ({ setValue, currentInputValue }) => {
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Input
      id="new-todo-input"
      type="text"
      onChange={onInputChange}
      value={currentInputValue}
      placeholder="Insert your ToDo"
    />
  );
};
ToDoInput.propTypes = {
  setValue: PropTypes.func,
  currentInputValue: PropTypes.string,
};
export default ToDoInput;
