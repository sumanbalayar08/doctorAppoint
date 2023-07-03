import React from "react";
import { Input, Form, message } from "antd";
import { useDispatch } from "react-redux";
import { showloading, hideloading } from "../redux/features/alertSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const onFinishHandler = async (values) => {
    try {
      dispatch(showloading());
      const res = await axios.post("http://localhost:4000/api/login", values);
      dispatch(hideloading());
      if (res.data.success) {
        message.success(res.data.message);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (err) {
      dispatch(hideloading());
      console.warn(err);
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h1 className="text-center">Login Form</h1>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/register" className="m-4">
            Not a User?
          </Link>
          <button className="btn btn-primary">Login</button>
        </Form>
      </div>
    </>
  );
};
export default Login;
