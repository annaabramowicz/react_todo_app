import { Button as ChakraButton } from "@chakra-ui/react";

const Button = (props) => {
  return (
    <ChakraButton colorScheme="teal" {...props}>
      {props.children || "Clear"}
    </ChakraButton>
  );
};
export default Button;
