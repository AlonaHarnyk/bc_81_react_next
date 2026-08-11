'use client';

import BookItem from '@/components/BookItem/BookItem';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Loading from '@/components/Loading/Loading';
import Modal from '@/components/Modal/Modal';
import { getBooksById } from '@/lib/services/booksApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function PageDetailsSlotClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: book,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['books', id],
    queryFn: () => getBooksById(id),
    refetchOnMount: false,
  });

  return (
    <>
      <Modal>
        {isLoading && <Loading />}
        {isError && <ErrorMessage />}
        {book && <BookItem book={book} />}
      </Modal>
    </>
  );
}
