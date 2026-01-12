import React from 'react';
import type { FormProps } from 'antd';
import { Button, Card, Checkbox, Form, Image, Input, Flex, Row, Col, Divider } from 'antd';
import LoginImage from '../../assets/draw1.webp';
import { useTranslation } from 'react-i18next';
import { UserOutlined, LockOutlined, FacebookFilled, GoogleSquareFilled } from '@ant-design/icons';
import { Link } from '../../components/Link';
import { useNavigate } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../routes/RouteConstant';
import type { Credentials, Oauth2Form, Oauth2Response } from '../../types/authentication';
import { ENV_CLIENT_ID, ENV_CLIENT_SECRET, GRANT_TYPE } from '../../utils/constants';
import { useAuthenAction } from '../../data/authService';
import Title from '../../components/Title';
import type { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { fetchUserInfo } from '../../redux/actions/userSlice';

const Login: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const { mutateAsync: login, isPending } = useAuthenAction();

    const onFinish: FormProps<Credentials>['onFinish'] = async (values) => {
        const formData: Oauth2Form = {
            client_id: ENV_CLIENT_ID,
            client_secret: ENV_CLIENT_SECRET,
            grant_type: GRANT_TYPE.PASSWORD,
            username: values.username,
            password: values.password,
        }

        const authResponse: Oauth2Response = await login(formData);
        if(authResponse) {
            sessionStorage.setItem('access_token', authResponse.access_token);
            sessionStorage.setItem('refresh_token', authResponse.refresh_token);
            dispatch(fetchUserInfo());
            navigate(ROUTE_CONSTANTS.home);
        }
    };

    const onFinishFailed: FormProps<Credentials>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card>
            <Row align="middle" gutter={80}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Image src={LoginImage} />
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Flex wrap gap="middle" vertical>
                        <Title level={4} textTransform={'uppercase'}>{t('title.login_form')}</Title>
                        <Form
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            >
                            <Form.Item<Credentials>
                                name="username"
                                rules={[{ required: true, message: 'Please input your username' }]}>
                                <Input size="large" placeholder="Username" prefix={<UserOutlined />} />
                            </Form.Item>

                            <Form.Item<Credentials>
                                name="password"
                                rules={[{ required: true, message: 'Please input your password' }]}>
                                <Input.Password size="large" placeholder="Password" prefix={<LockOutlined />} />
                            </Form.Item>

                            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Form.Item<Credentials> name="remember" valuePropName="checked" style={{ marginBottom: '0px' }}>
                                    <Checkbox defaultChecked={false}>{t('check_box.remember_me')}</Checkbox>
                                </Form.Item>

                                <Link>{t('link.forget_password')}</Link>
                            </div>

                            <div style={{ display: 'grid' }}>
                                <Form.Item style={{ margin: 0 }}>
                                    <Button loading={isPending} style={{ width: '100%' }} size="large" type='primary' htmlType="submit">{t('button.login')}</Button>
                                </Form.Item>
                                <Divider>or</Divider>
                                <Button size="large" style={{ backgroundColor: 'rgb(221, 75, 57)' }} icon={<GoogleSquareFilled />}>{t('button.sign_in_with_google')}</Button>
                                <Button size="large" style={{ margin: '10px 0px', backgroundColor: 'rgb(59, 89, 152)' }} icon={<FacebookFilled />}>{t('button.sign_in_with_facebook')}</Button>
                                <Link size='small' onClick={() => navigate(ROUTE_CONSTANTS.signup)}>{t('button.signup')}</Link>
                            </div>
                        </Form>
                    </Flex>
                </Col>
            </Row>
        </Card>
    )
}

export default Login;