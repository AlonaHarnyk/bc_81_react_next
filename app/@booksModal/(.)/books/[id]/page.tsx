import { getBooksById } from '@/lib/services/booksApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import PageDetailsSlotClient from './PageDetailsSlot.client';

interface PageDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function PageDetailsSlot({ params }: PageDetailsProps) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['books', id],
    queryFn: () => getBooksById(id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageDetailsSlotClient />
    </HydrationBoundary>
  );
}
