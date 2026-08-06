import { getContactById } from "@/lib/services/contactsApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ContactDetailsClient from "./ContactDetails.client";

interface ContactDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ContactDetailsPage({
  params,
}: ContactDetailsPageProps) {
  const { id } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["contact", id],
    queryFn: () => getContactById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ContactDetailsClient />
    </HydrationBoundary>
  );
}
