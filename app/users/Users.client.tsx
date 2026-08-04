'use client';

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Loading from '@/components/Loading/Loading';
import UsersList from '@/components/UsersList/UsersList';
import { getUsers } from '@/lib/services/usersApi';
import { useQuery } from '@tanstack/react-query';

export default function UsersClient() {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    refetchOnMount: false,
  });

  return (
    <>
      {isLoading && <Loading />}
      {isError && <ErrorMessage />}
      {users && users?.length > 0 && <UsersList users={users} />}
    </>
  );
}
