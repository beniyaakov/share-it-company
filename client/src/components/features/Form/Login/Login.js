import "./Login.css";
import React, { useState, useContext } from "react";
import { Link,Redirect } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContextProvider";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  
  const { isLogin, login } = useContext(AuthContext);

  if (isLogin) {
    return <Redirect to="userPage" />;
  }

  const saveInfoEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const saveInfoPassword = (e) => {
    setUserPassword(e.target.value);
    console.log(userPassword);
  };

  const userInfo = {
    email: email,
    password: userPassword,
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
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
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            onChange={saveInfoEmail}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={saveInfoPassword}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>תזכור אותי</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            שכחתי סיסמא
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={() => login(userInfo)}
          >
            התחבר
          </Button>
          או  
           
           <Link to="/Registration">הירשם</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
