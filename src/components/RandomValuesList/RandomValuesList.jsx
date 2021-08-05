import { useCallback, useEffect, useState } from 'react';
import RandomValue from './RandomValue/RandomValue';

const RandomValuesList = ({ appliedNumber }) => {
  const [randomValuesList, setRandomValuesList] = useState([]);

  const generateNewList = useCallback(() => {
    let newList = [];
    for (let i = 0; newList.length < appliedNumber; i++) {
      const newElement = Number(Math.random() * 100).toFixed(0);
      if (!newList.includes(newElement)) {
        newList.push(newElement);
      }
    }
    return newList;
  }, [appliedNumber]);

  useEffect(() => {
    setRandomValuesList(generateNewList());
  }, [appliedNumber, generateNewList]);

  return (
    <ul>
      {randomValuesList.map((randomValue) => (
        <RandomValue key={randomValue} randomValue={randomValue} />
      ))}
    </ul>
  );
};

export default RandomValuesList;
