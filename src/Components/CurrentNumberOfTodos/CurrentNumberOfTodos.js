import PropTypes from "prop-types";

const CurrentNumberOfTodos = ({ listOfTodos }) => {
  return `Current Number Of Todos: ${listOfTodos.length}`;
};
CurrentNumberOfTodos.propTypes = {
  listOfTodos: PropTypes.array,
};
export default CurrentNumberOfTodos;
