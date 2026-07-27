import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Book } from "../../types";
import Button from "../Button/Button";
import { deleteBook } from "../../services/booksApi";

interface BooksItemProps {
  book: Book;
  onOpenModal: (description: string) => void;
}

export default function BooksItem({ book, onOpenModal }: BooksItemProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const handleDelete = () => {
    mutate(book.id);
  };

  const handleOpenModal = () => {
    onOpenModal(book.description);
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
    </>
  );
}
