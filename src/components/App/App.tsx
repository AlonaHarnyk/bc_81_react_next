import { useState } from 'react';
import { getUsers } from '../../services/api';
import Button from '../Button/Button';
import type { User } from '../../types';
import UserList from '../UserList/UserList';
export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const showUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  return (
    <>
      {users.length > 0 ? (
        <UserList users={users} />
      ) : (
        <Button
          type="button"
          textContent="Show users"
          handleClick={showUsers}
        />
      )}
    </>
  );
}
