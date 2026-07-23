import { useEffect, useState } from "react";
import type { Book } from "../../types";
import { getBooks } from "../../services/booksApi";
import BooksList from "../BooksList/BooksList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Modal from "../Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import BooksForm from "../BooksForm/BooksForm";
import NoDataScreen from "../../NoDataScreen/NoDataScreen";

export default function Books() {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const openModal = (description: string) => {
    setModalContent(description);
  };

  const onSearch = (query: string) => {
    setQuery(query);
  };

  const {
    data: books,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["books", query],
    queryFn: () => getBooks(query),
  });

  return (
    <>
      <BooksForm onSerch={onSearch} />
      {books && books.length > 0 && !isLoading ? (
        <BooksList books={books} onOpenModal={openModal} />
      ) : (
        <NoDataScreen />
      )}

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {modalContent && (
        <Modal onClose={() => setModalContent(null)}>
          <p> {modalContent} </p>
        </Modal>
      )}
    </>
  );
}
