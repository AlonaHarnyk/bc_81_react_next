import { Field, Form, Formik } from "formik";
import { useId } from "react";

interface AddUserFormProps {
  onClose: () => void;
}

interface FormValues {
  name: string;
  email: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
};

export default function AddUserForm({ onClose }: AddUserFormProps) {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    onClose()
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>
          Enter name
          <Field type="text" name="name" />
        </label>

        <label>
          Enter email
          <Field type="email" name="email" />
        </label>

        <button type="submit">Submit Form</button>
      </Form>
    </Formik>
  );
}
