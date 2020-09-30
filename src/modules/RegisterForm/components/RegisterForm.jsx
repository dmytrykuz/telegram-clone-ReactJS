import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, Input, Tooltip } from "antd";
import {
  MailOutlined,
  UserOutlined,
  LockOutlined,
  QuestionCircleOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";

import { Wrapper, Button } from "components";

class RegisterForm extends Component {
  render() {
    const success = true;

    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };

    return (
      <div>
        <div className="auth__title">
          <h2>Реєстрація</h2>
          <p>Для входу в чат Вам потрібно зареєструватись</p>
        </div>
        <Wrapper>
          {success ? (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                // label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="E-mail" />
              </Form.Item>
              <Form.Item
                name="nickname"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true,
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Login" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Пароль"
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject("Пароль невірний");
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<QuestionCircleOutlined />}
                  placeholder="Повторіть пароль"
                />
              </Form.Item>

              <Form.Item>
                <Button
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
          ) : (
            <div className="auth__success-block">
              <InfoCircleTwoTone style={{ fontSize: '50px'}}/>
              <h3>Підтвердіть реєстрацію</h3>
              <p>На Ваш e-mail відправлено лист з посиланням на підтвердження реєстрації</p>
            </div>
          )}
        </Wrapper>
      </div>
    );
  }
}

export default RegisterForm;
