import React from 'react';
import 'antd/dist/antd.css';
import './Login.css';
import { Form, Input, Button, Checkbox } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link, Redirect
} from "react-router-dom";
import NavbarLogin from '../NavbarLogin.js'
import opusIcon from '../../images/loginproduct.jpg';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 9,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 14,
    span: 12,
  },
};
const tailSubmit = {
  wrapperCol: {
    offset: 11,
    span: 12,
  },
};

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      valid: false
    }
  }

  onFinish = values => {
    this.setState({valid : true})
  };

  onFinishFailed = errorInfo => {
    this.setState({valid : false})
  };
 

  render() {
    if (this.state.valid)
      return <Redirect to="/dashboard" />

    return (
    
        <div>
        <NavbarLogin/>
      <div class="LoginForm">
        <div >
         
            <img alt="opusIcon" src={opusIcon} className="logoLogin" />
         
          <h2 class="headerName"></h2>
        </div>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked" style={{ "margin-bottom": "0px" }}>
            <a>Forgot Password?</a>
          </Form.Item>

          <Form.Item {...tailSubmit}>
            <Button  htmlType="submit"  style={{ width: "25%" , backgroundColor : "#ec307a" }}>
              Submit
             </Button>

          </Form.Item>

          <br />
        </Form>
      </div>
      </div>
    );
  }
}


export default Login;
