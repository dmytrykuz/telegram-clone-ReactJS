import { withFormik } from "formik";
import LoginForm from "../components/LoginForm";
import validateForm from "utils/validation";
import { userActions } from "redux/actions";
import store from "redux/store";
import { withRouter } from "react-router-dom";

const LoginFormContainer = withFormik({
  enableReinitialize: true,

  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),

  validate: (values) => {
    let errors = {};

    validateForm({ isAuth: true, values, errors });

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    store
      .dispatch(userActions.fetchUserLogin(values))
      .then(({ status }) => {
        if (status === "success") {
          props.history.push("/");
        }
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      });
  },

  displayName: "Login Form", // helps with React DevTools
})(LoginForm);

export default withRouter(LoginFormContainer);
