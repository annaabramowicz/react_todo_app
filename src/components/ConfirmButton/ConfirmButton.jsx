import styles from './ConfirmButton.module.scss';

const ConfirmButton = ({ onButtonClick }) => {
  const onClick = () => {
    onButtonClick();
  };

  return (
    <button className={styles.confirmButton} onClick={onClick}>
      OK
    </button>
  );
};

export default ConfirmButton;
