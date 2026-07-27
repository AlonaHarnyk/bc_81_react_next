import axios from "axios";
import type { OnlineData, User, UserData } from "../types";

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

interface UpdateUserStatusParams {
  onlineData: OnlineData;
  id: string;
}

export const toggleUserStatus = async ({ onlineData, id }: UpdateUserStatusParams): Promise<User> => {
  const { data } = await userApi.put<User>(`/users/${id}`, onlineData);
  return data;
}
