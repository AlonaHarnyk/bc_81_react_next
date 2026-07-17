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
  const deleteDog = (id: number) => {
    const updatedDogs = dogs.filter(dog => dog.id !== id);
    setDogs(updatedDogs);
  };
  return (
    <>
      <Button
        type="button"
        textContent={isDogListVisible ? 'Hide dogs list' : 'Show dog list'}
        handleClick={toggleShowDogList}
      />
      {isDogListVisible && <DogsList dogs={dogs} handleDelete={deleteDog} />}
    </>
  );
}
