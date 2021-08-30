import PropTypes from "prop-types";
import Heading from "components/Heading/Heading";

const CurrentNumberOfTodos = ({ listOfTodos }) => {
  return <Heading size="md">Current number of todos: {listOfTodos.length}</Heading>;
};

CurrentNumberOfTodos.propTypes = {
  listOfTodos: PropTypes.array,
};

export default CurrentNumberOfTodos;
