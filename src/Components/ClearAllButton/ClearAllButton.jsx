import PropTypes from "prop-types";

const ClearAllButton = ({ removeAll }) => {
  const onButtonClicked = () => {
    removeAll();
  };
  return <button onClick={onButtonClicked}>CLEAR ALL</button>;
};

ClearAllButton.propTypes = {
  removeAll: PropTypes.func,
};

export default ClearAllButton;
