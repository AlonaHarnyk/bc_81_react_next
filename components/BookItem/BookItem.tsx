import { Book } from '@/types/book';

interface BookItemProps {
  book: Book;
}

export default function BookItem({ book }: BookItemProps) {
  return (
    <>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <p>{book.description}</p>
    </>
  );
}
