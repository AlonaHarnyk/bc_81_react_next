import type { User } from '../../types';

interface UserListProps {
  users: User[];
}
export default function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}
