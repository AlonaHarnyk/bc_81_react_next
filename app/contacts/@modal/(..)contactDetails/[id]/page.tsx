import { getContactById } from '@/lib/services/contactsApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import ContactDetailsSlotClient from './ContactDetailsSlot.client';

interface ContactDetailsSlot {
  params: Promise<{ id: string }>;
}

export default async function ContactDetailsSlot({
  params,
}: ContactDetailsSlot) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['contact', id],
    queryFn: () => getContactById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactDetailsSlotClient />
    </HydrationBoundary>
  );
}
