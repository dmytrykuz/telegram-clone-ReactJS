import React from "react";
import { Link } from "react-router-dom";

import { Form } from "antd";
import { MailOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";

import { Wrapper, Button, FormField } from "components";


const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <div>
      <div className="auth__title">
        <h2>Реєстрація</h2>
        <p>Для входу в чат Вам потрібно зареєструватись</p>
      </div>
      <Wrapper>
          <Form onSubmit={handleSubmit} className="login-form">
            <FormField
              name="email"
              icon={<MailOutlined />}
              placeholder="E-mail"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormField
              name="fullname"
              icon={<UserOutlined />}
              placeholder="Ваше ім'я та прізвище"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormField
              name="password"
              type="password"
              icon={<LockOutlined />}
              placeholder="Пароль"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormField
              name="confirm"
              type="password"
              icon={<LockOutlined />}
              placeholder="Повторіть пароль"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <Form.Item>
              <Button
                onClick={handleSubmit}
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
              >
                Зареєструватись
              </Button>
              <Link className="auth__register-link" to="/login">
                Увійти в аккаунт
              </Link>
            </Form.Item>
          </Form>
      </Wrapper>
    </div>
  );
};

export default RegisterForm;
