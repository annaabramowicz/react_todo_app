import cn from "classnames";
import styles from "./AddButton.module.scss";
import Button from "App/Components/Button/Button";

function AddButton({ onButtonClick, isDisabled }) {
  const onClick = () => {
    onButtonClick();
  };

  return (
    <Button
      onClick={onClick}
      disabled={isDisabled}
      className={cn([
        styles.addButton,
        { [styles.disabledButton]: isDisabled },
      ])}
    >
      +
    </Button>
  );
}
export default AddButton;
