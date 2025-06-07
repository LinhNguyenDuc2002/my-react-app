import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const { Header } = Layout;

const StyledHeader = styled(Header)`
    color: white;
    padding: 10px;
`;

const AppBar: React.FC = () => {
    return (
        <Header>
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