interface BooksFormProps {
  onSearch: (query: string) => void;
  query: string;
}

export default function BooksSearch({ onSearch, query }: BooksFormProps) {
  return (
    <input
      defaultValue={query}
      onChange={e => onSearch(e.target.value)}
      type="text"
      name="query"
      placeholder="query"
    />
  );
}
