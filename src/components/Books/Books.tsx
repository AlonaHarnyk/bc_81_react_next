import { useState } from 'react';
// import type { Book } from '../../types';
import { getBooks } from '../../services/booksApi';
import BooksList from '../BooksList/BooksList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Modal from '../Modal/Modal';
import { useQuery } from '@tanstack/react-query';
// import BooksForm from '../BooksForm/BooksSearch';
import NoDataScreen from '../NoDataScreen/NoDataScreen';
import Pagination from '../Pagination/Pagination';
import AddBookForm from '../AddBookForm/AddBookForm';
import BooksSearch from '../BooksForm/BooksSearch';
import { useDebouncedCallback } from 'use-debounce';

export default function Books() {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const openModal = (description: string) => {
    setModalContent(description);
  };

  const onSearchDebounced = useDebouncedCallback((query: string) => {
    setQuery(query);
    setCurrentPage(1);
  }, 500);

  // const onSearch = (query: string) => {
  //   setQuery(query);
  //   setCurrentPage(1);
  // };

  const {
    data: books,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['books', query, currentPage],
    queryFn: () => getBooks(query, currentPage),
  });

  const totalPages = 6;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {books && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}

      <BooksSearch onSearch={onSearchDebounced} query={query} />
      <AddBookForm />
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
