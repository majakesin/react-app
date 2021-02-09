import React from "react";
import { ErrorMessage } from "formik";

const CustomInputComponent = ({
  field, //{ name, value, onChange, onBlur }
  ...props
}) => (
  <div>
    <input type="text" {...field} {...props} />
    <ErrorMessage name={field.name} />
  </div>
);
export default CustomInputComponent;
