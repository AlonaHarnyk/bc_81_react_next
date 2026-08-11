import { UserDraft } from "@/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
  draft: UserDraft;
  setDraft: (userDraft: UserDraft) => void;
  clearDraft: () => void;
}

const initialUserDraft: UserDraft = {
  email: "",
  name: "",
};

export const useUserStore = create<UserStore>()(
  persist((set) => {
    return {
      draft: initialUserDraft,
      setDraft: (value) =>
        set({
          draft: value,
        }),
      clearDraft: () => set({ draft: initialUserDraft }),
    };
  },
  {
    name: "userDraft",
    partialize: (state) => ({draft: state.draft}),
  }

),
);
