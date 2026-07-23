import { useQuery } from '@tanstack/react-query';
import { getContacts } from '../../services/contactsApi';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function Contacts() {
  const {
    data: contacts,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
  });

  return (
    <>
      <ul>
        {contacts &&
          contacts.length > 0 &&
          contacts.map(contact => (
            <li key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.city}</p>
              <p>{contact.job}</p>
              <p>{contact.email}</p>
            </li>
          ))}
      </ul>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </>
  );
}
