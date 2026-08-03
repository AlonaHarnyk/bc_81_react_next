import Link from "next/link";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className={css.navigationList}>
        <li>
          <Link href="/" className={css.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/books" className={css.link}>
            Books
          </Link>
        </li>
        <li>
          <Link href="/contacts" className={css.link}>
            Contacts
          </Link>
        </li>
        <li>
          <Link href="/users" className={css.link}>
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}
