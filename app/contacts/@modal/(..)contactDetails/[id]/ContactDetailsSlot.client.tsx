'use client';

import Container from '@/components/Container/Container';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Loading from '@/components/Loading/Loading';
import Modal from '@/components/Modal/Modal';
import { getContactById } from '@/lib/services/contactsApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function ContactDetailsSlotClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: contact,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['contact', id],
    queryFn: () => getContactById(id),
    refetchOnMount: false,
  });

  return (
    <Modal>
      <Container>
        {isLoading && <Loading />}
        {isError && <ErrorMessage />}
        {contact && (
          <>
            <h3>{contact.name}</h3>
            <p>City: {contact.city}</p>
            <p>Job: {contact.job}</p>
            <p>Number: {contact.number}</p>
            <p>Email: {contact.email}</p>
            <p>Has work: {contact.hasWork ? 'yes' : 'no'} </p>
            <p>Sex: {contact.sex}</p>
            <p>
              Hobbies:
              {Array.isArray(contact.hobbies)
                ? contact.hobbies.join(', ')
                : contact.hobbies}
            </p>
            <p>Description: {contact.description}</p>
          </>
        )}
      </Container>
    </Modal>
  );
}
