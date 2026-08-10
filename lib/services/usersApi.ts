import { User } from '@/types/user';
import axios from 'axios';

interface UserData {
  name: string,
  email: string,
  isOnline: boolean,
}

const userApi = axios.create({
  baseURL: 'https://6240d2109b450ae274385b44.mockapi.io/api',
});

export async function getUsers(): Promise<User[]> {
  const { data } = await userApi.get<User[]>('/users');
  return data;
}

export async function getUserById(id: string): Promise<User> {
  const { data } = await userApi.get<User>(`/users/${id}`);
  return data;
}

export async function createUser(user: UserData): Promise<User> {
  const { data } = await userApi.post<User>("/users", user);
  return data;
}
