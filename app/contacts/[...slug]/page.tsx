import ContactsList from '@/components/ContactsList/ContactsList';
import { getContacts } from '@/lib/services/contactsApi';
import { getContactsCategory } from '@/lib/utils/contacts';
import { Metadata } from 'next';

interface ContactsCategoriesPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: ContactsCategoriesPageProps): Promise<Metadata> {
  const { slug } = await params;

  const metadata: Metadata = {
    title: `Contacts category: ${slug[0]}`,
    description: `Contacts List by ${slug[0]} category `,
    openGraph: {
      title: `Contacts category: ${slug[0]}`,
      description: `Contacts List by ${slug[0]} category `,
    },
  };
  return metadata;
}

export default async function ContactsCategoriesPage({
  params,
}: ContactsCategoriesPageProps) {
  const { slug } = await params;

  const param = getContactsCategory(slug[0]);

  const contacts = await getContacts(param);

  return <ContactsList contacts={contacts} />;
}
