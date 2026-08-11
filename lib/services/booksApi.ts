import axios from 'axios';
import type { Book, BookData } from '../../types/book';

const booksApi = axios.create({
  baseURL: 'https://6971cf4a32c6bacb12c49096.mockapi.io',
});

export const getBooks = async (): Promise<Book[]> => {
  const { data } = await booksApi.get<Book[]>('/books');
  return data;
};

export const getBooksById = async (id: string): Promise<Book> => {
  const { data } = await booksApi.get<Book>(`/books/${id}`);
  return data;
};

export const createBook = async (book: BookData): Promise<Book> => {
  const { data } = await booksApi.post<Book>('/books', book);
  return data;
};
