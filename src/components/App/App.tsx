import { useState } from "react";

import { initialDogs } from "../../data/dogs";
import DogsList from "../DogsList/DogsList";

export default function App() {
  const [dogs, setDogs] = useState(initialDogs);

  return (
    <DogsList dogs={dogs} />
  );
}
