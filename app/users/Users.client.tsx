"use client";

import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import Loading from "@/components/Loading/Loading";
import UsersList from "@/components/UsersList/UsersList";
import { getUsers } from "@/lib/services/usersApi";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function UsersClient() {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    refetchOnMount: false,
  });

  return (
    <>
      <Link href="/users/create">Create User</Link>
      {isLoading && <Loading />}
      {isError && <ErrorMessage />}
      {users && users?.length > 0 && <UsersList users={users} />}
    </>
  );
}
