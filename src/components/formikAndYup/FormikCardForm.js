import React from "react";
import { Formik, Form, Field } from "formik";
import { CreateNewCard } from "../../redux/actions";
import CardShema from "../yup/yupValidation";
import CustomInputComponent from "./formikComponents/formikInput";
const FormikYupExample = () => {
  return (
    <Formik
      initialValues={{ title: "", subtitle: "", description: "" }}
      validationSchema={CardShema}
      onSubmit={(values, { setSubmitting }) => {
        CreateNewCard(values.title, values.subtitle, values.description);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form>
          <Field
            name="title"
            component={CustomInputComponent}
            placeholder="title"
          ></Field>
          <Field
            name="subtitle"
            component={CustomInputComponent}
            placeholder="subtitle"
          ></Field>
          <Field
            name="description"
            component={CustomInputComponent}
            placeholder="description"
          ></Field>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default FormikYupExample;
