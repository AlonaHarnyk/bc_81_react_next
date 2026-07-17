import { useState } from "react";
import type { Dog } from "../../types";
import Button from "../Button/Button";
import AddressInfo from "../Address/Address";
interface DogItemProps {
  dog: Dog;
}

export default function DogItem({ dog }: DogItemProps) {
  const [isAddressVisible, setIsAddressVisible] = useState(false);

  const showAddress = () => {
    setIsAddressVisible(true);
  };

  return (
    <>
      <img src={dog.avatar} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>

      {isAddressVisible ? (
        <AddressInfo address={dog.address} />
      ) : (
        <Button
          type="button"
          textContent="Show address"
          handleClick={showAddress}
        />
      )}
    </>
  );
}
