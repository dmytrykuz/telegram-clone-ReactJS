import React from "react";
import { Link } from "react-router-dom";

import { Form, Input, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  QuestionCircleOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";

import { Wrapper, Button } from "components";
import { validateField } from "utils/helpers";


const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty,
    isValid,
  } = props;

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <div className="auth__title">
        <h2>Ввійти в аккаунт</h2>
        <p>Будь ласка, ввійдіть в свій аккаунт</p>
      </div>
      <Wrapper>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
            // name="email"
            validateStatus={validateField("email", touched, errors)}
            // help={!touched.email ? "" : errors.email}
            hasFeedback
          >
            <Input
              id="email"
              prefix={<MailOutlined />}
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            // name="password"
            // validateStatus={
            //   !touched.password ? "" : errors.password ? "error" : "success"
            // }
            // // help={!touched.password ? "" : errors.password}
            hasFeedback
          >
            <Input
              id="password"
              prefix={<LockOutlined />}
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            {!isSubmitting && !isValid && <span>Помилка!</span>}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
            >
              Ввійти в аккаунт
            </Button>
            <Link className="auth__register-link" to="/register">
              Зареєструватися
            </Link>
          </Form.Item>
        </Form>
      </Wrapper>
    </div>
  );
};

export default LoginForm;
