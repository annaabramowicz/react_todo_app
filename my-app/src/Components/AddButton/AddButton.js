function AddButton({ onButtonClick }) {
  const onClick = () => {
    onButtonClick();
  };

  return (
    <button id="add" onClick={onClick}>
      +
    </button>
  );
}
export default AddButton;
