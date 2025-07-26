import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button as AntButton, Card, Checkbox, Form, Image, Input, Typography, Flex } from 'antd';
import LoginImage from '../../assets/draw1.webp';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import styled from '@emotion/styled';
import { GoogleOutlined, FacebookOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from '../../components/Link';
import { useNavigate } from 'react-router-dom';
import ROUTE_CONSTANTS from '../../routes/routeConstant';
import type { Credentials, Oauth2Form, Oauth2Response } from '../../types/authentication';
import { ENV_CLIENT_ID, ENV_CLIENT_SECRET, ENV_GRANT_TYPE } from '../../utils/constants';
import { useAuthenAction } from '../../data/authService';
import Title from '../../components/Title';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions/useSlice';
import { useGetLoggedInUser } from '../../data/userService';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    login_container: {
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center'
    },
})

const Button = styled(AntButton)`
    width: 100%;
    margin: 10px 0px;
`;

type LayoutType = Parameters<typeof Form>[0]['layout'];

const Login: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    const dispatch = useDispatch(); // Read data from store and send actions to store
    const navigate = useNavigate();
    const [formLayout, setFormLayout] = useState<LayoutType>('vertical');
    const { mutateAsync: login } = useAuthenAction();

    const onFinish: FormProps<Credentials>['onFinish'] = async (values) => {
        const formData: Oauth2Form = {
            client_id: ENV_CLIENT_ID,
            client_secret: ENV_CLIENT_SECRET,
            grant_type: ENV_GRANT_TYPE,
            username: values.username,
            password: values.password,
        }

        const authResponse: Oauth2Response = await login(formData);
        if(authResponse) {
            sessionStorage.setItem('access_token', authResponse.access_token);
            sessionStorage.setItem('refresh_token', authResponse.refresh_token);

            // const response = await getLoggedInUser();
            // dispatch(setUser())
        }
    };

    const onFinishFailed: FormProps<Credentials>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    return (
        <Card>
            <div className={classes.container}>
                <Image src={LoginImage} />

                <div className={classes.login_container}>
                    <Flex wrap gap="middle" vertical>
                        <Title level={4} textTransform={'uppercase'}>{t('title.login_form')}</Title>

                        <Form
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
                                    <Checkbox defaultChecked={false}>{t('check_box.remember_me')}</Checkbox>
                                </Form.Item>

                                <Link>{t('link.forget_password')}</Link>
                            </div>

                            <Form.Item>
                                <Button size="large" type='primary' htmlType="submit" >{t('button.login')}</Button>
                                <hr style={{ margin: '10px 0px' }} />
                                <Button size="large" style={{ backgroundColor: 'rgb(221, 75, 57)' }}><GoogleOutlined /> {t('button.sign_in_with_google')}</Button>
                                <Button size="large" style={{ backgroundColor: 'rgb(59, 89, 152)' }}><FacebookOutlined /> {t('button.sign_in_with_facebook')}</Button>
                                <Link size='small' onClick={() => navigate(ROUTE_CONSTANTS.signup)}>{t('button.signup')}</Link>
                            </Form.Item>
                        </Form>
                    </Flex>
                </div>
            </div>
        </Card>
    )
}

export default Login;