import ContactsList from "@/components/ContactsList/ContactsList";
import { getContacts } from "@/lib/services/contactsApi";
import { getContactsCategory } from "@/lib/utils/contacts";

interface ContactsCategoriesPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function ContactsCategoriesPage({
  params,
}: ContactsCategoriesPageProps) {
  const { slug } = await params;

  const param = getContactsCategory(slug[0]);

  const contacts = await getContacts(param);

  return <ContactsList contacts={contacts} />;
}
