import { useEffect, useState } from "react";
import type { Book } from "../../types";
import { getBooks } from "../../services/booksApi";
import BooksList from "../BooksList/BooksList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleGetBooks = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const booksData = await getBooks();
        setBooks(booksData);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleGetBooks();
  }, []);

  return (
    <>
      <BooksList books={books} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </>
  );
}
