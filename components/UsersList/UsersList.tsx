import { User } from '@/types/user';
import Link from 'next/link';

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
          <Link href={`/users/${user.id}`}>User Details</Link>
        </li>
      ))}
    </ul>
  );
}
