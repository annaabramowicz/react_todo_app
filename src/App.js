// import trash from './images/trash.png';
import ConfirmButton from './components/ConfirmButton/ConfirmButton';
import CurrentNumberOfRandomValues from './components/CurrentNumberOfRandomValues/CurrentNumberOfRandomValues';
import NumberOfRandomValuesInput from './components/NumberOfRandomValuesInput/NumberOfRandomValuesInput';
import RandomValuesList from './components/RandomValuesList/RandomValuesList';
import styles from './App.module.scss';
import { useState } from 'react';
// import './reset.css';

function App() {
  const [currentInputValue, setCurrentInputValue] = useState(0);
  const [appliedNumber, setAppliedNumber] = useState(0);

  const onConfirmButtonClick = () => {
    setAppliedNumber(currentInputValue);
    setCurrentInputValue(0);
  };

  return (
    <main className={styles.app}>
      <section className>
        <div>
          <NumberOfRandomValuesInput
            setValue={setCurrentInputValue}
            currentInputValue={currentInputValue}
          />
          <ConfirmButton onButtonClick={onConfirmButtonClick} />
        </div>
        <CurrentNumberOfRandomValues nb={appliedNumber} />
      </section>
      <section>
        <RandomValuesList appliedNumber={appliedNumber} />
      </section>
    </main>
  );
}

export default App;
