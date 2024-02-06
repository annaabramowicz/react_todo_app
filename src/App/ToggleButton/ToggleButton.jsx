import { useColorMode } from "@chakra-ui/react";
import Button from "Components/Button/Button";

const ToggleButton = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} {...props}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default ToggleButton;
