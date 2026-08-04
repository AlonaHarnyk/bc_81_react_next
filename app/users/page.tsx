import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
// import css from './page.module.css';
import { getUsers } from '@/lib/services/usersApi';
import UsersClient from './Users.client';

export default async function Users() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UsersClient />
    </HydrationBoundary>
  );
}
