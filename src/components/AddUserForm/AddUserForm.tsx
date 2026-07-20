import { useId } from 'react';

interface AddUserFormProps {
  onClose: () => void;
}

export default function AddUserForm({ onClose }: AddUserFormProps) {
  const formId = useId();
  const handleSubmit = (formData: FormData) => {
    const name = formData.get('userName');
    const email = formData.get('userEmail');
    console.log({ name, email });
    onClose();
  };
  return (
    <form action={handleSubmit}>
      <label htmlFor={`${formId}-userName`}>Enter name</label>
      <input type="text" name="userName" id={`${formId}-userName`} />
      <label htmlFor={`${formId}-userEmail`}>Enter email</label>
      <input type="email" name="userEmail" id={`${formId}-userEmail`} />
      <button type="submit">Submit Form</button>
    </form>
  );
}
