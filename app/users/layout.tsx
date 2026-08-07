import Container from '@/components/Container/Container';

interface UsersLayoutProps {
  children: React.ReactNode;
  usersModal: React.ReactNode;
}

export default function UsersLayout({
  children,
  usersModal,
}: UsersLayoutProps) {
  return (
    <Container>
      {children}
      {usersModal}
    </Container>
  );
}
