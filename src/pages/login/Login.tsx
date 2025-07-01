import React from 'react';
import type { FormProps } from 'antd';
import { Button as AntButton, Checkbox, Flex, Form, Image, Input } from 'antd';
import LoginImage from '../../assets/draw1.webp';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import styled from '@emotion/styled';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Link } from '../../components/Link';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: '30px'
    },

    login_form: {
        width: '45%',
        textAlign: 'start'
    },

    form_input: {
        marginBottom: '40px',
    },

    register: {
        display: 'flex',
        justifyContent: 'center'
    }
})

const Button = styled(AntButton)`
    width: 100%;
    margin: 10px 0px;
`;


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={classes.container}>
            <Image width={'45%'} src={LoginImage} />

            <Form
                className={classes.login_form}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item<FieldType>
                    className={classes.form_input}
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    className={classes.form_input}
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">{t('button.login')}</Button>
                    <hr style={{ margin: '20px 0px' }} />
                    <Button style={{ backgroundColor: 'rgb(221, 75, 57)' }}><GoogleOutlined /> {t('button.sign_in_with_google')}</Button>
                    <Button style={{ backgroundColor: 'rgb(59, 89, 152)' }}><FacebookOutlined /> {t('button.sign_in_with_facebook')}</Button>
                    <div className={classes.register}>
                        <Link label='Đăng ký'></Link>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;