import React from "react";
import { Link } from "react-router-dom";

import { Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

import { Wrapper, Button } from "components";
import { validateField } from "utils/helpers";

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
  } = props;
  return (
    <div>
      <div className="auth__title">
        <h2>Ввійти в аккаунт</h2>
        <p>Будь ласка, ввійдіть в свій аккаунт</p>
      </div>
      <Wrapper>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
            validateStatus={validateField("email", touched, errors)}
            help={!touched.email ? "" : errors.email}
            hasFeedback
          >
            <Input
              id="email"
              prefix={<MailOutlined />}
              size="large"
              placeholder="E-Mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            validateStatus={validateField("password", touched, errors)}
            help={!touched.password ? "" : errors.password}
            hasFeedback
          >
            <Input
              id="password"
              prefix={<LockOutlined />}
              size="large"
              type="password"
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            {isSubmitting && !isValid && <span>Помилка!</span>}
            <Button
              className="login-form-button"
              type="primary"
              size="large"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              Ввійти в аккаунт
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/registration">
            Зареєструватися
          </Link>
        </Form>
      </Wrapper>
    </div>
  );
};

export default LoginForm;
