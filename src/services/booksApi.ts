import axios from "axios";
import type { Book, BookData } from "../types/index";

const booksApi = axios.create({
  baseURL: "https://6971cf4a32c6bacb12c49096.mockapi.io",
});

export const getBooks = async (
  search: string,
  page: number,
): Promise<Book[]> => {
  const { data } = await booksApi.get<Book[]>("/books", {
    params: {
      search: search,
      page,
      limit: 3,
    },
  });
  return data;
};

export const deleteBook = async (id: string): Promise<Book> => {
  const { data } = await booksApi.delete<Book>(`/books/${id}`);
  return data;
};

export const addBook = async (book: BookData): Promise<Book> => {
  console.log(book);

  const { data } = await booksApi.post<Book>("/books", book);
  return data;
};

export const editBook = async (book: Book): Promise<Book> => {
  const { data } = await booksApi.put<Book>(`/books/${book.id}`, book);
  return data;
}