import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { User } from '../../types';

import Button from '../Button/Button';
import { deleteUser, toggleUserStatus } from '../../services/usersApi';

interface UserListProps {
  users: User[];
}
export default function UserList({ users }: UserListProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });

  const { mutate: putMutate } = useMutation({
    mutationFn: toggleUserStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });
  const handleDelete = (id: string) => {
    mutate(id);
  };

  const updateData = (user: User) => {
    putMutate({
      onlineData: { isOnline: !user.isOnline },
      id: user.id,
    });
  };

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{String(user.isOnline)}</p>
          <Button
            type="button"
            textContent="Delete"
            handleClick={() => {
              handleDelete(user.id);
            }}
          />
          <Button
            type="button"
            textContent="Toggle"
            handleClick={() => {
              updateData(user);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
