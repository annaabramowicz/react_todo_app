import Button from "Components/Button/Button";

function ClearAllButton({ removeAll, isDisClear }) {
  const onButtonClicked = () => {
    removeAll();
  };
  
  return (
    <Button onClick={onButtonClicked} isDisabled={isDisClear}>
      CLEAR ALL
    </Button>
  );
}
export default ClearAllButton;
