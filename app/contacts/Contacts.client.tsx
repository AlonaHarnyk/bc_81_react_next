'use client';

import ContactsList from '@/components/ContactsList/ContactsList';
import { getContacts } from '@/lib/services/contactsApi';
import { useQuery } from '@tanstack/react-query';

export default function ContactsClient() {
  const {
    data: contacts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
    refetchOnMount: false,
  });

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Error</p>}
      {contacts && contacts.length > 0 && <ContactsList contacts={contacts} />}
    </>
  );
}
