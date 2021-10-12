import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Registration.css";
import { Form, Input, Select, Checkbox, Button } from "antd";
import { register } from "../../../../Service/User-Service";
import { message } from "antd";

const { Option } = Select;
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Registration = () => {
  const [adminEmail, setAdminEmail] = useState([]);
  const [adminPassword, setAdminPassword] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);

  const saveInfoEmail = (e) => {
    setAdminEmail(e.target.value);
    console.log(adminEmail);
  };

  const saveInfoPassword = (e) => {
    setAdminPassword(e.target.value);
    console.log(adminPassword);
  };

  const saveInfofirstName = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  };

  const saveInfolastName = (e) => {
    setLastName(e.target.value);
    console.log(lastName);
  };

  const adminData = {
    email: adminEmail,
    Password: adminPassword,
    firstName: firstName,
    lastName: lastName,
  };

  const success = () => {
    message.success("נרשמת בהצלחה");
  };

  const sendData = () => {
    register(adminData).then((data) => {
      console.log(data);
      // window.location.pathname="/login"
      success();
    });
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      className="Registration-form "
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="שם פרטי"
        label="שם פרטי"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: " שדה חובה ",
            whitespace: true,
          },
        ]}
      >
        <Input onChange={saveInfofirstName} value={firstName} />
      </Form.Item>

      <Form.Item
        name="שם משפחה"
        label="שם משפחה"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "שדה חובה",
            whitespace: true,
          },
        ]}
      >
        <Input onChange={saveInfolastName} value={lastName} />
      </Form.Item>

      <Form.Item
        name="אימייל"
        label="אימייל"
        rules={[
          {
            type: "email",
            message: "המייל לא חוקי",
          },
          {
            required: true,
            message: "אנא הוסיף מייל",
          },
        ]}
      >
        <Input onChange={saveInfoEmail} value={adminEmail} />
      </Form.Item>

      <Form.Item
        name="password"
        label="סיסמא"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password onChange={saveInfoPassword} value={adminPassword} />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="אימות סיסמא"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="תנאים"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("תסכים לתנאים")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          קראתי את <a href="">התקנון</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={sendData}>
          הירשם
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Registration;
