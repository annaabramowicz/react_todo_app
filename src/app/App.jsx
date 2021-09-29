import "reset.css";
import React from "react";
import Button from "components/Buttons/Button/Button";
import { useDispatch } from "react-redux";
import { getRecipesAsyc } from "store/todos/todos";
import config from "config/env";

console.log(config);

function App() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getRecipesAsyc());
  };

  return <Button onClick={handleClick}>Thunk example</Button>;
}

export default App;
