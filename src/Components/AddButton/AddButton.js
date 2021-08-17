import styles from "./AddButton.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

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
AddButton.propTypes = {
  onButtonClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
export default AddButton;
