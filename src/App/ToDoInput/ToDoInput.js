import Input from "Components/Input/Input";

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
      width="xs" 
    />
  );
};
export default ToDoInput;
