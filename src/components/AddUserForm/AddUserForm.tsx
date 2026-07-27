import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./AddUserForm.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../../services/usersApi";
import type { UserData } from "../../types";

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

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Email must be valid")
    .required("Email is required"),
});

export default function AddUserForm({ onClose }: AddUserFormProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  const handleSubmit = (values: FormValues) => {
    const newUser: UserData = {
      ...values,
      isOnline: false,
    };
    mutate(newUser);
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ errors }) => {
        console.log(errors);

        return (
          <Form>
            <label>
              Enter name
              <Field type="text" name="name" />
              <ErrorMessage
                component="span"
                name="name"
                className={css.error}
              />
            </label>

            <label>
              Enter email
              <Field type="email" name="email" />
              <ErrorMessage
                component="span"
                name="email"
                className={css.error}
              />
            </label>

            <button type="submit">Submit Form</button>
          </Form>
        );
      }}
    </Formik>
  );
}
