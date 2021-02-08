import * as yup from "yup";

const CardShema = yup.object().shape({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  description: yup.string().required().max(30).min(10),
});
export default CardShema;
