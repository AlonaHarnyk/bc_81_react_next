import Container from "@/components/Container/Container";
import { Metadata } from "next";

interface UsersLayoutProps {
  children: React.ReactNode;
  usersModal: React.ReactNode;
}

export const metadata: Metadata = {
  title: "User list",
  description: "User list with their names, emails and statuses",
  openGraph: {
    title: "User list",
    description: "User list with their names, emails and statuses",
  },
};

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
