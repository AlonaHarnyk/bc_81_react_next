interface BooksFormProps {
  onSerch: (query: string) => void;
}

export default function BooksForm({ onSerch }: BooksFormProps) {
  function hadleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const query = formData.get("query") as string;
    onSerch(query);
  }

  return (
    <form onSubmit={hadleSubmit}>
      <input type="text" name="query" placeholder="query" />
      <button type="submit">Search</button>
    </form>
  );
}
