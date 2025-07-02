import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button as AntButton, Checkbox, Form, Image, Input, Typography } from 'antd';
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
        padding: '20px'
    },

    login_container: {
        width: '45%',
        padding: '0px 50px'
    },

    login_form: {
        width: '100%',
        textAlign: 'start'
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

const { Title } = Typography;
type LayoutType = Parameters<typeof Form>[0]['layout'];
type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    return (
        <div className={classes.container}>
            <Image width={'45%'} src={LoginImage} />

            <div className={classes.login_container}>
                <Title level={4}>LOGIN</Title>
                <Form
                    className={classes.login_form}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout={formLayout}
                    >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType> name="remember" valuePropName="checked" style={{ marginBottom: '0px' }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">{t('button.login')}</Button>
                        <hr style={{ margin: '5px 0px' }} />
                        <Button style={{ backgroundColor: 'rgb(221, 75, 57)' }}><GoogleOutlined /> {t('button.sign_in_with_google')}</Button>
                        <Button style={{ backgroundColor: 'rgb(59, 89, 152)' }}><FacebookOutlined /> {t('button.sign_in_with_facebook')}</Button>
                        <div className={classes.register}>
                            <Link label='Đăng ký'></Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login;