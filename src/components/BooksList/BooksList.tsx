import type { Book } from "../../types";
import BooksItem from "../BooksItem/BooksItem";

interface BooksListProps {
  books: Book[];
  onOpenModal: (description: string)=>void
}

export default function BooksList({ books, onOpenModal }: BooksListProps) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <BooksItem book={book} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
}
