import React from "react";
import { Form, Input } from "antd";
import '../styles/RegisterForm.css'
import {Link} from 'react-router-dom';


const Register = () => {
  const onFinishHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
            <h1 className="text-center">Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to='/login' className="m-4">Already a User?</Link>
          <button className="btn btn-primary">Register</button>
        </Form>
      </div>
    </>
  );
};
export default Register;
