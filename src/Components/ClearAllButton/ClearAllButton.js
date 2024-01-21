function ClearAllButton({ removeAll }) {
  const onButtonClicked = () => {
    removeAll();
  };

  return (
    <button className="clearAll" onClick={onButtonClicked}>
      CLEAR ALL
    </button>
  );
}
export default ClearAllButton;
