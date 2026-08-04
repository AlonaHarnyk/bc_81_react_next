import { Contact } from '@/types/contact';

interface ContactsListProps {
  contacts: Contact[];
}

export default function ContactsList({ contacts }: ContactsListProps) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <h2>{contact.name}</h2>
          <p>{contact.city}</p>
          <p>{contact.job}</p>
          <p>{contact.description}</p>
        </li>
      ))}
    </ul>
  );
}
