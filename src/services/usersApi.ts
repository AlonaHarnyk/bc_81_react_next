import axios from "axios";
import type { User, UserData } from "../types";

const userApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export async function getUsers(): Promise<User[]> {
  const { data } = await userApi.get<User[]>("/users");
  return data;
}

export const deleteUser = async (id: string): Promise<User> => {
  const { data } = await userApi.delete<User>(`/users/${id}`);
  return data;
};

export const addUser = async (user: UserData): Promise<User> => {
  const { data } = await userApi.post<User>("/users", user);
  return data;
};
