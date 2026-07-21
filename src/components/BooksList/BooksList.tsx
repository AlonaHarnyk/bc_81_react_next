import type { Book } from "../../types";
import BooksItem from "../BooksItem/BooksItem";

interface BooksListProps {
  books: Book[];
}

export default function BooksList({ books }: BooksListProps) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <BooksItem book={book} />
        </li>
      ))}
    </ul>
  );
}
