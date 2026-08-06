import ContactsCategories from "@/components/ContactsCategories/ContactsCategories";

import css from "./page.module.css";

interface ContactsLayoutProps {
  children: React.ReactNode;
}

export default function ContactsLayout({ children }: ContactsLayoutProps) {
  return (
    <div className={css.container}>
      <ContactsCategories />
      {children}
    </div>
  );
}
