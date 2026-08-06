import { getUserById } from '@/lib/services/usersApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import UserDetailsClient from './UserDetails.client';

interface UserDetailsProps {
  params: Promise<{ userId: string }>;
}
export default async function UserDetails({ params }: UserDetailsProps) {
  const { userId } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['user', userId],
    queryFn: () => getUserById(userId),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserDetailsClient />
    </HydrationBoundary>
  );
}
