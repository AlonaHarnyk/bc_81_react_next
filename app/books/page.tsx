import { getBooks } from '@/lib/services/booksApi';
import css from './page.module.css';
import BooksList from '@/components/BooksList/BooksList';
import Container from '@/components/Container/Container';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Books List: `,
  description: `Book List with title and author`,
  openGraph: {
    title: `Books List: `,
    description: `Book List with title and author`,
  },
};

export default async function Books() {
  const books = await getBooks();

  return (
    <Container>
      <div className={css.innerWrapper}>
        <h2 className={css.title}>Books</h2>
        <Link href={`/books/create`}>Create Book</Link>
        <BooksList books={books} />
      </div>
    </Container>
  );
}
