import { User } from '@/types/user';

interface UsersListProps {
  users: User[];
}

export default function UsersList({ users }: UsersListProps) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.isOnline}</p>
        </li>
      ))}
    </ul>
  );
}
