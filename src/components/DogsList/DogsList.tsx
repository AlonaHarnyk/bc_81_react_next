import type { Dog } from '../../types';
import DogItem from '../DogItem/DogItem';

interface DogsListProps {
  dogs: Dog[];
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
}

export default function DogsList({
  dogs,
  handleDelete,
  handleToggle,
}: DogsListProps) {
  return (
    <ul>
      {dogs.map(dog => (
        <li key={dog.id}>
          <DogItem
            dog={dog}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </li>
      ))}
    </ul>
  );
}
