interface UserSearchProps {
  onSearch: (query: string) => void;
  query: string;
}

export default function UserSearch({ query, onSearch }: UserSearchProps) {
  return (
    <input
      type="text"
      placeholder="Search users"
      defaultValue={query}
      name="userQuery"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
