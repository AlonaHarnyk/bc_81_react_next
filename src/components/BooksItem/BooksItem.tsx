import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Book } from '../../types';
import Button from '../Button/Button';
import { deleteBook } from '../../services/booksApi';
import { useState } from 'react';
import BookFormEdit from '../BookFormEdit/BookFormEdit';

interface BooksItemProps {
  book: Book;
  onOpenModal: (description: string) => void;
}

export default function BooksItem({ book, onOpenModal }: BooksItemProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books'],
      });
    },
    onError: e => {
      console.log(e);
    },
  });

  const handleDelete = () => {
    mutate(book.id);
  };

  const handleOpenModal = () => {
    onOpenModal(book.description);
  };

  const toggleEditForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <Button
        type="button"
        textContent="View description"
        handleClick={handleOpenModal}
      />
      <Button type="button" textContent="Delete" handleClick={handleDelete} />
      <Button
        type="button"
        textContent={isFormOpen ? 'Close Edit' : 'Open Edit'}
        handleClick={toggleEditForm}
      />
      {isFormOpen && (
        <BookFormEdit bookToEdit={book} onClose={toggleEditForm} />
      )}
    </>
  );
}
