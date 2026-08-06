import Link from "next/link";

import css from './ContactsCategories.module.css'

export default function ContactsCategories() {
  return (
    <ul className={css.list}>
      <li>
        <Link href="/contacts/all">All contacts</Link>
      </li>
      <li>
        <Link href="/contacts/with-job">Contacts with a job</Link>
      </li>
      <li>
        <Link href="/contacts/without-job">Contacts without a job</Link>
      </li>
    </ul>
  );
}
