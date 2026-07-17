import type { Dog } from "../../types";
import DogItem from "../DogItem/DogItem";

interface DogsListProps {
  dogs: Dog[];
}

export default function DogsList({ dogs }: DogsListProps) {
  return (
    <ul>
      {dogs.map((dog) => (
        <li key={dog.id}>
          <DogItem dog={dog} />
        </li>
      ))}
    </ul>
  );
}
