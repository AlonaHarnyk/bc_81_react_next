import type { Dog } from "../../types";

interface DogItemProps {
  dog: Dog;
}

export default function DogItem({ dog }: DogItemProps) {
  return (
    <>
      <img src={dog.avatar} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p>Age: {dog.age}</p>
      <p>Breed: {dog.breed}</p>
    </>
  );
}
