"use client";
import { createUser } from "@/lib/services/usersApi";
import { useUserStore } from "@/store/userStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function CreateUser() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { draft, setDraft, clearDraft } = useUserStore();

  const { mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      clearDraft();
      router.push("/users");
    },
  });
  const handleSubmit = (formData: FormData) => {
    const formValues = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };
    mutate({
      ...formValues,
      isOnline: false,
    });
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setDraft({
      ...draft,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form action={handleSubmit}>
      <label>
        Enter name
        <input name="name" value={draft.name} onChange={handleChange} />
      </label>
      <label>
        Enter your email
        <input
          name="email"
          type="email"
          value={draft.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}
