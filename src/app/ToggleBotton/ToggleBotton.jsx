import Button from "components/Buttons/Button/Button";
import { useColorMode } from "@chakra-ui/react";

const ToggleButton = (props) => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button
      position="fixed"
      top="5px"
      right="5px"
      size="sm"
      onClick={toggleColorMode}
      {...props}
    />
  );
};

export default ToggleButton;
