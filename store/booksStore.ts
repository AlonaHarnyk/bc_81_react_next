import { BookDraft } from '@/types/book';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BooksStore {
  draft: BookDraft;
  setDraft: (book: BookDraft) => void;
  clearDraft: () => void;
}

const initialBookDraft = {
  author: '',
  title: '',
  year: '2026',
  description: '',
};

export const useBookStore = create<BooksStore>()(
  persist(
    set => {
      return {
        draft: initialBookDraft,
        setDraft: book => {
          set({ draft: book });
        },
        clearDraft: () => {
          set({ draft: initialBookDraft });
        },
      };
    },
    {
      name: 'book-draft',
      partialize: store => store.draft,
    }
  )
);
