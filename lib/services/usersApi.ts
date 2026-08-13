import { User } from "@/types/user";
import axios from "axios";
import { nextApi } from "./nextApi";

interface UserData {
  name: string;
  email: string;
  isOnline: boolean;
}

export async function getUsers(): Promise<User[]> {
  const { data } = await nextApi.get<User[]>("/users");
  return data;
}

export async function getUserById(id: string): Promise<User> {
  const { data } = await nextApi.get<User>(`/users/${id}`);
  return data;
}

export async function createUser(user: UserData): Promise<User> {
  const { data } = await nextApi.post<User>("/users", user);
  return data;
}
