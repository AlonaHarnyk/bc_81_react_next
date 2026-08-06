import { Contact } from "@/types/contact";
import Link from "next/link";

interface ContactsListProps {
  contacts: Contact[];
}

export default function ContactsList({ contacts }: ContactsListProps) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <h2>{contact.name}</h2>
          <p>{contact.city}</p>
          <p>{contact.job}</p>
          <p>{contact.description}</p>
          <Link href={`/contactDetails/${contact.id}`}> Open details </Link>
        </li>
      ))}
    </ul>
  );
}
