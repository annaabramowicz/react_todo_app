import styles from "./AddButton.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";
import { Button } from "@chakra-ui/button";

function AddButton({ onButtonClick, isDisabled }) {
  const onClick = () => {
    onButtonClick();
  };

  return (
    <Button colorScheme="blue" variant="outline"
      onClick={onClick}
      // disabled={isDisabled}
      // className={cn([
      //   styles.addButton,
      //   { [styles.disabledButton]: isDisabled },
      // ])}
    >
      Add
    </Button>
  );
}

AddButton.propTypes = {
  onButtonClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default AddButton;
