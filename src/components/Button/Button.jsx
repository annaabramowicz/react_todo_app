import { Button as ChakraButton } from '@chakra-ui/react';

const Button = (props) => {
  const getColorScheme = () => {
    if (props.type === 'positive') {
      return 'green';
    } else if (props.type === 'negative') {
      return 'red';
    }
    return 'orange';
  };

  return (
    <ChakraButton
      colorScheme={getColorScheme()}
      variant="solid"
      size="md"
      {...props}
    />
  );
};

export default Button;
