import { Flex as ChakraFlex } from "@chakra-ui/layout";

const Flex = (props) => {
  return (
    <ChakraFlex
      alignItems="center"
      justifyContent="center"
      {...props}
    />
  );
};

export default Flex;
