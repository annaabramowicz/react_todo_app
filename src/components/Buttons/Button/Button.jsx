import { Button as ChakraButton } from "@chakra-ui/button";

const Button = (props) => {
  const getColorScheme = () => {
    if (props.type === "positive") {
      return "black";
    } else if (props.type === "negative") {
      return "teal";
    }
    return "orange";
  };

  return (
    <ChakraButton colorScheme={getColorScheme()} ml={2} variant="solid  " {...props} />
  );
};

export default Button;
