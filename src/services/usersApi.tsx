import axios from "axios";
import type { User } from "../types";

const userApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});

export async function getUsers(): Promise<User[]> {
  const { data } = await userApi.get<User[]>("/users");
  return data;
}
