'use client';

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Loading from '@/components/Loading/Loading';
import Modal from '@/components/Modal/Modal';
import User from '@/components/User/User';
import { getUserById } from '@/lib/services/usersApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function UserDetailsSlotClient() {
  const { userId } = useParams<{ userId: string }>();
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserById(userId),
    refetchOnMount: false,
  });
  return (
    <Modal>
      {isLoading && <Loading />}
      {isError && <ErrorMessage />}
      {user && <User user={user} />}
    </Modal>
  );
}
