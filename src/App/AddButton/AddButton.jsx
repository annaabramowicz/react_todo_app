import Button from "Components/Buttons/Button/Button";

function AddButton({ onButtonClick, isDis }) {
  const onClick = () => {
    onButtonClick();
  };

  return (
    <Button onClick={onClick} isDisabled={isDis}  ml={2} >
      Add
    </Button>
  );
}
export default AddButton;
