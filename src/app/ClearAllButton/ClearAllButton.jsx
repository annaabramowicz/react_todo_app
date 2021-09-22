import PropTypes from "prop-types";
import Button from "components/Buttons/Button/Button";

const ClearAllButton = ({ removeAll }) => {
  const onButtonClicked = () => {
    removeAll();
  };
  return (
    <Button
      ml={15}
      colorScheme="teal"
      variant="solid"
      mt={5}
      onClick={onButtonClicked}
    >
      CLEAR ALL
    </Button>
  );
};

ClearAllButton.propTypes = {
  removeAll: PropTypes.func,
};

export default ClearAllButton;
