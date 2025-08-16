import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button as AntButton, Checkbox, Form, Image, Input, Typography } from 'antd';
import LoginImage from '../../assets/draw1.webp';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import styled from '@emotion/styled';
import { GoogleOutlined, FacebookOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from '../../components/Link';
import { useNavigate } from 'react-router-dom';
import ROUTE_CONSTANTS from '../../routes/routeConstant';
import type { Credentials, Oauth2Form } from '../../types/login';
import { ENV_CLIENT_ID, ENV_CLIENT_SECRET, ENV_GRANT_TYPE } from '../../utils/constants';
import { useAuthenAction } from '../../data/authService';

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
        textAlign: 'start'
    },

    register: {
        textAlign: 'center'
    }
})

const Button = styled(AntButton)`
    width: 100%;
    margin: 10px 0px;
`;

const { Title } = Typography;
type LayoutType = Parameters<typeof Form>[0]['layout'];

const Login: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    const navigate = useNavigate();
    const [formLayout, setFormLayout] = useState<LayoutType>('vertical');
    const { mutate: login } = useAuthenAction();

    const onFinish: FormProps<Credentials>['onFinish'] = (values) => {
        const formData: Oauth2Form = {
            client_id: ENV_CLIENT_ID,
            client_secret: ENV_CLIENT_SECRET,
            grant_type: ENV_GRANT_TYPE,
            username: values.username,
            password: values.password,
        }

        const response = login(formData);
        console.log(response);
    };

    const onFinishFailed: FormProps<Credentials>['onFinishFailed'] = (errorInfo) => {
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
                    <Form.Item<Credentials>
                        name="username"
                        rules={[{ required: true, message: 'Please input your username' }]}>
                        <Input placeholder="Username" prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item<Credentials>
                        name="password"
                        rules={[{ required: true, message: 'Please input your password' }]}>
                        <Input.Password placeholder="Password" prefix={<LockOutlined />} />
                    </Form.Item>

                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Form.Item<Credentials> name="remember" valuePropName="checked" style={{ marginBottom: '0px' }}>
                            <Checkbox defaultChecked={false}>Remember me</Checkbox>
                        </Form.Item>

                        <Link>Forget password?</Link>
                    </div>

                    <Form.Item>
                        <Button size="large" type='primary' htmlType="submit" >{t('button.login')}</Button>
                        <hr style={{ margin: '20px 0px' }} />
                        <div className={classes.register}>
                            <Button size="large" style={{ backgroundColor: 'rgb(221, 75, 57)' }}><GoogleOutlined /> {t('button.sign_in_with_google')}</Button>
                            <Button size="large" style={{ backgroundColor: 'rgb(59, 89, 152)' }}><FacebookOutlined /> {t('button.sign_in_with_facebook')}</Button>
                            <Link size='small' onClick={() => navigate(ROUTE_CONSTANTS.signup)}>Signup</Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login;