import css from './page.module.css';

interface ContactsLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}

export default function ContactsLayout({
  children,
  sidebar,
  modal,
}: ContactsLayoutProps) {
  return (
    <div className={css.container}>
      {sidebar}
      {children}
      {modal}
    </div>
  );
}
