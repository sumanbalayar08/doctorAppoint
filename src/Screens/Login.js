import React from "react";
import {Input, Form,message} from 'antd';

import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login=()=>{

  const navigate=useNavigate();


const onFinishHandler=async(values)=>{
const res=await axios.post('http://localhost:4000/api/login',values);
if(res.data.success){
  message.success("Login Successfully");
  navigate('/');
}else{
  message.error(res.data.message);
}
}

    return(
        <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
            <h1 className="text-center">Login Form</h1>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to='/register' className="m-4">Not a User?</Link>
          <button className="btn btn-primary">Login</button>
        </Form>
      </div>
    </>
    )
}
export default Login;