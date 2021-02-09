import * as yup from "yup";

const CardShema = yup.object().shape({
  title: yup.string().required("Required"),
  subtitle: yup.string().required("Required"),
  description: yup
    .string()
    .required("Required")
    .max(30, "Max characters is 30")
    .min(10, "Min characters is 10."),
});
export default CardShema;
