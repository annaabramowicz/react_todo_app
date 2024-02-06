import Button from "Components/Buttons/Button/Button";

function ClearAllButton({ removeAll, isDisClear }) {
  const onButtonClicked = () => {
    removeAll();
  };
  
  return (
    <Button onClick={onButtonClicked} w={110}
    //  isDisabled={isDisClear}
     >
      CLEAR ALL
    </Button>
  );
}
export default ClearAllButton;
