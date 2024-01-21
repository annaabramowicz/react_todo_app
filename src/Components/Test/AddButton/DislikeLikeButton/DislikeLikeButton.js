function DislikeLikeButton({ name, callback, count }) {
  console.log(`Button ${name}`);
  // const onClick = () => {
  //   onButtonClick();
  // };

  return (
    <button onClick={callback}>
      {name} ({count})
    </button>
  );
}
export default DislikeLikeButton;
