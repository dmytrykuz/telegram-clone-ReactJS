import {withFormik} from "formik";
import RegisterForm from "../components/RegisterForm";
import validateForm from "utils/validation";

export default withFormik({
    enableReinitialize: true,
    validate: (values) => {
        let errors = {};
        
        validateForm({ isAuth: false, values, errors});

        return errors;
    },

    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: "Register Form", // helps with React DevTools
})(RegisterForm);
