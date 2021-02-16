import React from "react";
import { validateField } from "utils/helpers";
import { Form, Input } from "antd";

const FormField = ({
  name,
  placeholder,
  type,
  icon,
  handleChange,
  handleBlur,
  touched,
  errors,
  values,
}) => {
  return (
    <Form.Item
      validateStatus={validateField(name, touched, errors)}
      help={!touched[name] ? "" : errors[name]}
      hasFeedback
    >
      <Input
        id={name}
        prefix={icon}
        placeholder={placeholder}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        size="large"
      />
    </Form.Item>
  );
};

export default FormField;
