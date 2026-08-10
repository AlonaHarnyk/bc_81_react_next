"use client";
import { createUser } from "@/lib/services/usersApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function CreateUser() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
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
  return (
    <form action={handleSubmit}>
      <label>
        Enter name
        <input name="name" />
      </label>
      <label>
        Enter your email
        <input name="email" type="email" />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}
