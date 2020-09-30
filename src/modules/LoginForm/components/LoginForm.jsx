import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Wrapper, Button } from "components";

class LoginForm extends Component {
  render() {
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
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              validateStatus="success"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            {/* <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item> */}

            <Form.Item>
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
  }
}

export default LoginForm;
