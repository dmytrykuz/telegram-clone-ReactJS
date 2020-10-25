import { withFormik } from "formik";
import RegisterForm from "../components/RegisterForm";

export default withFormik({
  // mapPropsToValues: () => ({email: "qweqweqwewqe"}),

  validate: (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Введите пароль";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i.test(values.password)) {
      errors.password =
        "Пароль повинен складатися з восьми або більше символів латинського алфавіту, містити великі і малі літери, цифри.";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "Register Form", // helps with React DevTools
})(RegisterForm);
