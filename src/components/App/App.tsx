import { useState } from "react";
import { getUsers } from "../../services/api";
import Button from "../Button/Button";
import type { User } from "../../types";
import UserList from "../UserList/UserList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </>
  );
}
