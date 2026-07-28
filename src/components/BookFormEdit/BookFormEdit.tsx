import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editBook } from '../../services/booksApi';
import type { Book } from '../../types';

interface BookFormEditProps {
  onClose: () => void;
  bookToEdit: Book;
}
export default function BookFormEdit({
  onClose,
  bookToEdit,
}: BookFormEditProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: editBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
      onClose();
    },
  });

  const handleSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const year = Number(formData.get('year'));
    const description = formData.get('description') as string;
    const editedBook = {
      title,
      author,
      year,
      description,
      id: bookToEdit.id,
    };

    mutate(editedBook);
  };
  return (
    <>
      <form action={handleSubmit}>
        <input type="text" name="title" defaultValue={bookToEdit.title} />
        <input type="text" name="author" defaultValue={bookToEdit.author} />
        <input type="text" name="year" defaultValue={bookToEdit.year} />
        <textarea
          name="desctiption"
          defaultValue={bookToEdit.description}
        ></textarea>
        <button type="submit">Edit Book</button>
      </form>
    </>
  );
}
