import styles from "./AddButton.module.scss";
import cn from "classnames";

function AddButton({ onButtonClick, isDisabled }) {
  const onClick = () => {
    onButtonClick();
  };

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={cn([
        styles.addButton,
        { [styles.disabledButton]: isDisabled },
      ])}
    >
      +
    </button>
  );
}
export default AddButton;
