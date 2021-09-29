import "reset.css";
import React from "react";
import Button from "components/Buttons/Button/Button";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log("click works");
  };

  return <Button onClick={handleClick}>Thunk example</Button>;
}

export default App;
