import { Contact } from '@/types/contact';

import { nextApi } from './nextApi';

export const getContacts = async (hasWork?: boolean): Promise<Contact[]> => {
  const { data } = await nextApi.get<Contact[]>('/contacts', {
    params: { hasWork },
  });
  return data;
};
export const getContactById = async (id: string): Promise<Contact> => {
  const { data } = await nextApi.get<Contact>(`/contacts/${id}`);
  return data;
};
