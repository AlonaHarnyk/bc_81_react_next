import { getContactById } from '@/lib/services/contactsApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import ContactDetailsClient from './ContactDetails.client';
import { Metadata } from 'next';

interface ContactDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ContactDetailsPageProps): Promise<Metadata> {
  const { id } = await params;

  const contact = await getContactById(id);

  const metadata: Metadata = {
    title: `Contact: ${contact.name}`,
    description: `Contact: ${contact.name}, email: ${contact.email}, phone number: ${contact.number} `,
    openGraph: {
      title: `Contact: ${contact.name}`,
      description: `Contact: ${contact.name}, email: ${contact.email}, phone number: ${contact.number} `,
    },
  };
  return metadata;
}

export default async function ContactDetailsPage({
  params,
}: ContactDetailsPageProps) {
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
