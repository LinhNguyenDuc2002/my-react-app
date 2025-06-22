import React from 'react';
import { Image, Layout, Menu, Typography } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { createUseStyles } from 'react-jss';

const { Title } = Typography;

const Header = styled(Layout.Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

const AppBar: React.FC = () => {
    const classes = useStyles();

    return (
        <Header>
            <div className={classes.container}>
                <Image src="D:\my-react-app\src\assets\react.svg" />

                <Title level={1}>Blue shop</Title>
            </div>

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                Home
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                Profile
                </Menu.Item>
                <Menu.Item key="3" icon={<SettingOutlined />}>
                Settings
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default AppBar;