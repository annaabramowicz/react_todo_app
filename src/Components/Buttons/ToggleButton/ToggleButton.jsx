import { Button as ChakraButton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const ToggleButton = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraButton onClick={toggleColorMode} {...props}>
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </ChakraButton>
  );
};

export default ToggleButton;
