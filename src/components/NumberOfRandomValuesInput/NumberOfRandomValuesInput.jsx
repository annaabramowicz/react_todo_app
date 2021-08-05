const NumberOfRandomValuesInput = ({ setValue, currentInputValue }) => {
  const onInputChange = (e) => {
    setValue(e.target.value ? Number(e.target.value) : 0);
  };

  return (
    <input
      type="number"
      min="0"
      max="10"
      onChange={onInputChange}
      value={currentInputValue}
    />
  );
};

export default NumberOfRandomValuesInput;
