import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBook } from "../../services/booksApi";
import type { BookData } from "../../types";

export default function AddBookForm() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const handleSubmit = (formData: FormData) => {
    const author = formData.get("author") as string;
    const title = formData.get("title") as string;
    const year = formData.get("year") as string;
    const description = formData.get("description") as string;
    mutate({ author, title, description, year: Number(year) });
  };

  return (
    <form action={handleSubmit}>
      <input name="author" type="text" placeholder="Author" />
      <input name="title" type="text" placeholder="Title" />
      <input name="year" type="number" placeholder="Year" />
      <textarea
        name="description"
        rows={5}
        placeholder="Description"
      ></textarea>
      <button>Send</button>
    </form>
  );
}
