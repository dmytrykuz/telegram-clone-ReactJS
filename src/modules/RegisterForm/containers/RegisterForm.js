import { withFormik } from "formik";
import RegisterForm from "../components/RegisterForm";
import validateForm from "utils/validation";
import { userActions } from "redux/actions";
import store from "redux/store";
import { withRouter } from "react-router-dom";

const RegistrationFormContainer = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: "",
    fullname: "",
    password: "",
    confirm: "",
  }), 

  validate: (values) => {
    let errors = {};

    validateForm({ isAuth: false, values, errors });

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    store
      .dispatch(userActions.fetchUserRegistration(values))
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

  displayName: "Register Form", // helps with React DevTools
})(RegisterForm);

export default withRouter(RegistrationFormContainer);