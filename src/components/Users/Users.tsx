import { useState } from "react";
import { getUsers } from "../../services/usersApi";
import Button from "../Button/Button";
import type { User } from "../../types";
import UserList from "../UserList/UserList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import AddUserForm from "../AddUserForm/AddUserForm";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);

  const showUsers = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const data = await getUsers();
      setUsers(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const showForm = () => {
    setIsShowForm(true);
  };

  const closeForm = () => {
    setIsShowForm(false);
  };

  return (
    <>
      {users.length > 0 ? (
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
