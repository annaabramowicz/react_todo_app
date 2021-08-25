import PropTypes from "prop-types";
import { Button } from "@chakra-ui/button";


const ClearAllButton = ({ removeAll }) => {
  const onButtonClicked = () => {
    removeAll();
  };
  return <Button onClick={onButtonClicked}>CLEAR ALL</Button>;
};

ClearAllButton.propTypes = {
  removeAll: PropTypes.func,
};

export default ClearAllButton;
