import React from "react";
import { Form, Input, message } from "antd";
import "../styles/RegisterForm.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showloading, hideloading } from "../redux/features/alertSlice";
import { useEffect } from "react";



const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

 

  const onFinishHandler = async (values) => {
    try {
      dispatch(showloading());

      const res = await axios.post(
        "http://localhost:4000/api/register",
        values
      );
      dispatch(hideloading());
      if (res.data.success) {
        message.success("Register Successfully!");
        //localStorage.setItem("token", res.data.token);
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideloading());
      console.warn(error);
      message.error("Something went wrong");
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
          <Link to="/login" className="m-4">
            Already a User?
          </Link>
          <button className="btn btn-primary">Register</button>
        </Form>
      </div>
    </>
  );
};
export default Register;
