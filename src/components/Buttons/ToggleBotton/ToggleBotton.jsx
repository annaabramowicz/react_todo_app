import { Button as ToggleButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/react";

const Button = (props) => {
  const { toggleColorMode } = useColorMode();

  return (
    <ToggleButton
      position="fixed"
      top="5px"
      right="5px"
      size="sm"
      onClick={toggleColorMode}
      {...props}
    />
  );
};

export default Button;
