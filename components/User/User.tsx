import { User as UserType } from '@/types/user';
import Link from 'next/link';
interface UserProps {
  user: UserType;
}

export default function User({ user }: UserProps) {
  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.isOnline}</p>
      <Link href="/users">Back to user`s list</Link>
    </>
  );
}
