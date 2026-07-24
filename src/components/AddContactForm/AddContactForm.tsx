import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from 'formik';
import css from './AddContactForm.module.css';
import * as Yup from 'yup';

type Hobbies =
  | 'swimming'
  | 'dancing'
  | 'football'
  | 'music'
  | 'horseRiding'
  | 'hiking'
  | 'sleeping';

interface FormValue {
  name: string;
  city: string;
  job: string;
  number: string;
  email: string;
  hasWork: 'true' | 'false';
  sex: 'male' | 'female';
  hobbies: Hobbies[];
  description: string;
}

const initialValues: FormValue = {
  name: '',
  city: '',
  job: '',
  number: '',
  email: '',
  hasWork: 'true',
  sex: 'male',
  hobbies: [],
  description: '',
};
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be more than 2 symbols')
    .max(30, 'Name must be less than 30 symbols')
    .required('name is required'),
  city: Yup.string()
    .min(2, 'City name must be more than 2 symbols')
    .max(30, 'City name must be less than 30 symbols')
    .required('City name is required'),
  job: Yup.string()
    .min(2, 'Job  must be more than 2 symbols')
    .max(30, 'Job  must be less than 30 symbols')
    .required('Job  is required'),
  number: Yup.string()
    .min(4, 'phone number must be more than 4 numbers')
    .required('phone number is required'),
  hasWork: Yup.string().oneOf(['true', 'false']),
  sex: Yup.string().oneOf(['male', 'female']),
  hobbies: Yup.array().of(
    Yup.string().oneOf([
      'swimming',
      'dancing',
      'football',
      'music',
      'horseRiding',
      'hiking',
      'sleeping',
    ])
  ),
  description: Yup.string()
    .min(2, 'description must be more than 2 symbols')
    .max(200, 'description must be less than 200 symbols'),
});
export default function AddContactForm() {
  const handleSubmit = (
    values: FormValue,
    actions: FormikHelpers<FormValue>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label>Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="p" className={css.error} />
        <label>
          City
          <Field type="text" name="city" />
        </label>
        <ErrorMessage name="city" component="p" className={css.error} />
        <label>
          Job
          <Field type="text" name="job" />
        </label>
        <ErrorMessage name="job" component="p" className={css.error} />
        <label>
          Number
          <Field type="text" name="number" />
        </label>
        <ErrorMessage name="number" component="p" className={css.error} />
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <ErrorMessage name="email" component="p" className={css.error} />

        <fieldset>
          <legend>Has work</legend>
          <label>
            <Field type="radio" name="hasWork" value="true" />
            Yes
          </label>
          <label>
            <Field type="radio" name="hasWork" value="false" />
            No
          </label>
          <ErrorMessage name="hasWork" component="p" className={css.error} />
        </fieldset>

        <label>
          Sex
          <Field as="select" name="sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
          <ErrorMessage name="sex" component="p" className={css.error} />
        </label>

        <fieldset>
          <legend>Select hobbies</legend>
          <label>
            <Field type="checkbox" name="hobbies" value="swimming" />
            Swimming
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="dancing" />
            Dancing
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="football" />
            Football
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="music" />
            Music
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="horseRiding" />
            Horse Riding
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="hiking" />
            Hiking
          </label>
          <label>
            <Field type="checkbox" name="hobbies" value="sleeping" />
            Sleeping
          </label>
          <ErrorMessage name="hobbies" component="p" className={css.error} />
        </fieldset>

        <label>
          Description
          <Field as="textarea" name="description" rows={4}></Field>
          <ErrorMessage name="textarea" component="p" className={css.error} />
        </label>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
