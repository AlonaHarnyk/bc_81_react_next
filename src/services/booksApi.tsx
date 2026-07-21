import axios from "axios";
import type { Book } from "../types/index";

const booksApi = axios.create({
  baseURL: "https://6971cf4a32c6bacb12c49096.mockapi.io",
});

export const getBooks = async (): Promise<Book[]> => {
  const { data } = await booksApi.get<Book[]>("/books");
  return data;
};
