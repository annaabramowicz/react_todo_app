const ClearAllButton = ({removeAll}) => {
  const onButtonClicked = () => {
    removeAll();
  };
  return <button onClick={onButtonClicked}>CLEAR ALL</button>;
};
export default ClearAllButton;
