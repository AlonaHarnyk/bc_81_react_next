import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import css from './page.module.css';
import { getContacts } from '@/lib/services/contactsApi';
import ContactsClient from './Contacts.client';

export default async function Contacts() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['contacts'],
    queryFn: () => getContacts(),    
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactsClient />
    </HydrationBoundary>
  );
}
