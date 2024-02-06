import Input from "Components/Input/Input";

const ToDoInput = ({ setValue, currentInputValue }) => {
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Input
      onChange={onInputChange}
      value={currentInputValue}
      width="xs" 
    />
  );
};
export default ToDoInput;
