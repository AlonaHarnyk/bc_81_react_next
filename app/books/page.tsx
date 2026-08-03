import { getBooks } from "@/lib/services/booksApi";
import css from "./page.module.css";
import BooksList from "@/components/BooksList/BooksList";
import Container from "@/components/Container/Container";

export default async function Books() {
  const books = await getBooks();

  return (
    <Container>
      <div className={css.innerWrapper}>
        <h2 className={css.title}>Books</h2>
        <BooksList books={books} />
      </div>
    </Container>
  );
}
