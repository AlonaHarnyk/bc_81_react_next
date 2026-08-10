import { getUserById } from "@/lib/services/usersApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import UserDetailsClient from "./UserDetails.client";
import { Metadata } from "next";

interface UserDetailsProps {
  params: Promise<{ userId: string }>;
}

export async function generateMetadata({ params }: UserDetailsProps): Promise<Metadata> {
  const { userId } = await params;
  const user = await getUserById(userId);

  const metadata: Metadata = {
    title: `User ${user.name}`,
    description: `User ${user.name} - email ${user.email} , status: ${user.isOnline ? "online" : "offline"}`,
    openGraph: {
      title: `User ${user.name}`,
      description: `User ${user.name} - email ${user.email} , status: ${user.isOnline ? "online" : "offline"}`,
    },
  };

  return metadata;
}

export default async function UserDetails({ params }: UserDetailsProps) {
  const { userId } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserDetailsClient />
    </HydrationBoundary>
  );
}
