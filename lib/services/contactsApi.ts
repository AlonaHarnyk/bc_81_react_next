import { Contact } from '@/types/contact';
import axios from 'axios';

const contactsApi = axios.create({
  baseURL: 'https://6240d2109b450ae274385b44.mockapi.io/api',
});
export const getContacts = async (): Promise<Contact[]> => {
  const { data } = await contactsApi.get<Contact[]>('/contacts');
  return data;
};
