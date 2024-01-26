import Button from "Components/Button/Button";

function AddButton({ onButtonClick, isDis }) {
  const onClick = () => {
    onButtonClick();
  };

  return (
    <Button onClick={onClick} isDisabled={isDis}>
      Add
    </Button>
  );
}
export default AddButton;
