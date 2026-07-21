import type { Book } from "../../types";

interface BooksItemProps {
  book: Book;
}

export default function BooksItem({ book }: BooksItemProps) {
  return (
    <>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.year}</p>
    </>
  );
}
