import { useState } from 'react';
import Button from '../Button/Button';
import { initialDogs } from '../../data/dogs';
import DogsList from '../DogsList/DogsList';

export default function App() {
  const [dogs, setDogs] = useState(initialDogs);
  const [isDogListVisible, setIsDogListVisible] = useState(false);
  const toggleShowDogList = () => {
    setIsDogListVisible(!isDogListVisible);
  };
  return (
    <>
      <Button
        type="button"
        textContent={isDogListVisible ? 'Hide dogs list' : 'Show dog list'}
        handleClick={toggleShowDogList}
      />
      {isDogListVisible && <DogsList dogs={dogs} />}
    </>
  );
}
