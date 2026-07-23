import axios from "axios";
import type { Contact } from "../types";

const contactApi = axios.create({
  baseURL: "https://6240d2109b450ae274385b44.mockapi.io/api",
});
export async function getContacts(): Promise<Contact[]> {
  const { data } = await contactApi.get<Contact[]>("/contacts");
  return data;
}
