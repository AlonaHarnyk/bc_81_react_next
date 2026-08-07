import ContactDetailsClient from '@/app/contactDetails/[id]/ContactDetails.client';
import { getContactById } from '@/lib/services/contactsApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

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
      <ContactDetailsClient />
    </HydrationBoundary>
  );
}
