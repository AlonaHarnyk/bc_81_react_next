import { useState } from 'react';
import { getUsers } from '../../services/usersApi';
import Button from '../Button/Button';
import UserList from '../UserList/UserList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import AddUserForm from '../AddUserForm/AddUserForm';
import { useQuery } from '@tanstack/react-query';

export default function Users() {
  const [isShowForm, setIsShowForm] = useState(false);

  const [isListShown, setIsListShown] = useState(false);

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    enabled: isListShown,
  });

  const showUsers = () => {
    setIsListShown(true);
  };

  const showForm = () => {
    setIsShowForm(true);
  };

  const closeForm = () => {
    setIsShowForm(false);
  };

  return (
    <>
      {isListShown ? (
        <>
          {users && users.length > 0 && (
            <>
              <UserList users={users} />
              {isShowForm ? (
                <AddUserForm onClose={closeForm} />
              ) : (
                <Button
                  type="button"
                  textContent="Add user"
                  handleClick={showForm}
                />
              )}
            </>
          )}
        </>
      ) : (
        <Button
          type="button"
          textContent="Show users"
          handleClick={showUsers}
        />
      )}

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </>
  );
}

// Додати компоненту UserItem параграф, в якому виводити інформацію про те, чи користувач онлайн.
// Додати компоненту UserItem кнопку Toggle status, ми натисанні на яку на бекенд має відправлятись put-запит для зміни статусу на протилежний.
