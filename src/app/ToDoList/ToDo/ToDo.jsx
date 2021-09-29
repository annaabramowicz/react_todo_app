import PropTypes from "prop-types";
import DeleteButton from "components/Buttons/DeleteIconButton/DeleteIconButton";
import React from "react";
import Flex from "components/Flex/Flex";
import Heading from "components/Heading/Heading";

function ToDo({ todo, removeOneTodo }) {
  const onClick = () => {
    removeOneTodo(todo.id);
  };

  return (
    <li>
      <Flex>
        <Heading size="sm">
          {todo.text}
          <DeleteButton onClick={onClick}/>
        </Heading>
      </Flex>
    </li>
  );
}

ToDo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
  }),
  removeToDo: PropTypes.func,
};

export default ToDo;
