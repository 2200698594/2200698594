import React from 'react';
import './index.css'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function MyLogin() {

    let navigate = useNavigate();

    /**
     * @type onFinish from表单触发的函数，可以获取到账号，密码，记录密码等信息
     */
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);

        navigate('/layout');
    };

    return (
        <div className='box-login'>
            <div className='login-box'>
                <h1>请先登录</h1>
                <div>
                    <Form
                        name="normal_login"
                        className="login-form login-top"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '必须填写账号!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入账号" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '必须填写密码!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请填写密码"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div >
    )
};