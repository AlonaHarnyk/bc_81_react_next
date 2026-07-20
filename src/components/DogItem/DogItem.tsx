import { useState } from 'react';
import type { Dog } from '../../types';
import Button from '../Button/Button';
import AddressInfo from '../Address/Address';
interface DogItemProps {
  dog: Dog;
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
}

export default function DogItem({
  dog,
  handleDelete,
  handleToggle,
}: DogItemProps) {
  const [isAddressVisible, setIsAddressVisible] = useState(false);

  const showAddress = () => {
    setIsAddressVisible(true);
  };

  const onDelete = () => {
    handleDelete(dog.id);
  };

  const onToggle = () => {
    handleToggle(dog.id);
  };

  // const toggleFriendly = () => {
  //   setFriendly(!isFriendly);
  // };

  return (
    <>
      <img src={dog.avatar} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
      {dog.isFriendly ? <p>isFriendly: Yes</p> : <p>isFriendly: No</p>}
      <Button type="button" textContent="Delete" handleClick={onDelete} />

      {isAddressVisible ? (
        <AddressInfo address={dog.address} />
      ) : (
        <Button
          type="button"
          textContent="Show address"
          handleClick={showAddress}
        />
      )}
      <Button
        type="button"
        textContent="Toggle Friendly"
        handleClick={onToggle}
      />
    </>
  );
}
// Додати до компонента елемента списку кнопку Change status of friendliness , при натисканні на яку статус тварини має змінюватись на протилежний.
