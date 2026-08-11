'use client';

import { createBook } from '@/lib/services/booksApi';
import { useBookStore } from '@/store/booksStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function BookCreate() {
  const router = useRouter();
  const draft = useBookStore(store => store.draft);
  const setDraft = useBookStore(store => store.setDraft);
  const clearDraft = useBookStore(store => store.clearDraft);

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books'],
      });
      clearDraft();
      router.push('/books');
    },
  });

  const handleSubmit = (formData: FormData) => {
    console.log(formData);
    const formValues = {
      title: formData.get('title') as string,
      author: formData.get('author') as string,
      year: Number(formData.get('year')),
      description: formData.get('description') as string,
    };
    console.log(formValues);
    mutate(formValues);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setDraft({
      ...draft,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form action={handleSubmit}>
      <label>
        Title
        <input name="title" onChange={handleChange} value={draft.title} />
      </label>
      <label>
        Author
        <input name="author" onChange={handleChange} value={draft.author} />
      </label>
      <label>
        Year
        <input
          name="year"
          type="number"
          onChange={handleChange}
          value={draft.year}
        />
      </label>
      <label>
        Description
        <input
          name="description"
          onChange={handleChange}
          value={draft.description}
        />
      </label>
      <button type="submit">Create Book</button>
    </form>
  );
}

// author: string;
// title: string;
// year: number;
// description: string;
