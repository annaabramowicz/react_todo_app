import cn from "classnames";
import styles from "./AddButton.module.scss";

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
