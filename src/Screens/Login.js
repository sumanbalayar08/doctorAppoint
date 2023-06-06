import React from "react";
import {Input, Form} from 'antd';
import {Link} from 'react-router-dom';

const Login=()=>{

const onFinishHandler=(values)=>{
console.log(values);
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