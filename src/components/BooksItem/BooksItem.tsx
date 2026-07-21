import type { Book } from "../../types";
import Button from "../Button/Button";

interface BooksItemProps {
  book: Book;
  onOpenModal: (description: string) => void;
}

export default function BooksItem({ book, onOpenModal }: BooksItemProps) {
  const handleOpenModal = () => {
    onOpenModal(book.description);
  };

  return (
    <>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <Button
        type="button"
        textContent="View description"
        handleClick={handleOpenModal}
      />
    </>
  );
}
