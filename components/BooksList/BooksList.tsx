import { Book } from '@/types/book';
import Link from 'next/link';

interface BooksListProps {
  books: Book[];
}

export default function BooksList({ books }: BooksListProps) {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <h3>{book.title}</h3>
          <p>by: {book.author}</p>
          <Link href={`/books/${book.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  );
}
