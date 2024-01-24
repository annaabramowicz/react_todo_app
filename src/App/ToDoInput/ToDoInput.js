const ToDoInput = ({ setValue, currentInputValue }) => {
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      id="new-todo-input"
      type="text"
      onChange={onInputChange}
      value={currentInputValue}
    />
  );
};
export default ToDoInput;
