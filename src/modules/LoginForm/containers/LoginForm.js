import { withFormik } from "formik";
import LoginForm from "../components/LoginForm";
import validateForm from "utils/validation";

export default withFormik({
  enableReinitialize: true,

  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),

  validate: (values) => {
    let errors = {};

    validateForm({ isAuth: false, values, errors });

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "Login Form", // helps with React DevTools
})(LoginForm);
