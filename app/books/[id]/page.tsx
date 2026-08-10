import { getBooksById } from '@/lib/services/booksApi';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import PageDetailsClient from './PageDetails.client';
import { Metadata } from 'next';

interface PageDetailsProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageDetailsProps): Promise<Metadata> {
  const { id } = await params;

  const book = await getBooksById(id);

  const description = book.description
    ? `description: ${book.description}`
    : '';

  const metadata: Metadata = {
    title: `Book: ${book.title}`,
    description: `Book: ${book.title}, author: ${book.author}, year: ${book.year}, ${description} `,
    openGraph: {
      title: `Book: ${book.title}`,
      description: `Book: ${book.title}, author: ${book.author}, year: ${book.year}, ${description} `,
    },
  };
  return metadata;
}

export default async function PageDetails({ params }: PageDetailsProps) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['books', id],
    queryFn: () => getBooksById(id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageDetailsClient />
    </HydrationBoundary>
  );
}
