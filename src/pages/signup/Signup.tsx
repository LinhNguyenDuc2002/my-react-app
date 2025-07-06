import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button as AntButton, Checkbox, Form, Image, Input, Typography } from 'antd';
import SignupImage from '../../assets/draw2.webp';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import styled from '@emotion/styled';
import { UserOutlined, MailOutlined, PhoneOutlined, LockOutlined } from '@ant-design/icons';
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

const Signup: React.FC = () => {
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
            <Image width={'45%'} src={SignupImage} />

            <div className={classes.login_container}>
                <Title level={4}>SIGNUP</Title>
                <Form
                    className={classes.login_form}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout={formLayout}
                    >
                    <Form.Item<FieldType>
                        // label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username' }]}>
                        <Input placeholder="Username" prefix={<UserOutlined />} />
                    </Form.Item>

                    <Form.Item<FieldType>
                        // label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username' }]}>
                        <Input placeholder="Email" prefix={<MailOutlined />} />
                    </Form.Item>

                    <Form.Item<FieldType>
                        // label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username' }]}>
                        <Input placeholder="Phone number" prefix={<PhoneOutlined />} />
                    </Form.Item>

                    <Form.Item<FieldType>
                        // label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username' }]}>
                        <Input.Password placeholder="Password" prefix={<LockOutlined />} />
                    </Form.Item>

                    <Form.Item<FieldType>
                        // label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username' }]}>
                        <Input.Password placeholder="Repeat your password" prefix={<LockOutlined />} />
                    </Form.Item>

                    <Form.Item>
                        <Button size="large" type="primary" htmlType="submit">{t('button.signup')}</Button>
                        <div className={classes.register}>
                            Have already an account?<Link size='small' label='Login here'></Link>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Signup;