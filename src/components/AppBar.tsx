import React from 'react';
import { Avatar, Dropdown, Image, Layout, Space, Typography } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined, ShoppingCartOutlined, BellOutlined, MessageOutlined, OrderedListOutlined, QuestionCircleOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { createUseStyles } from 'react-jss';
import logoUrl from '../assets/react.svg';
import { Link } from './Link';
import { useTranslation } from 'react-i18next';

const Header = styled(Layout.Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '75%'
    },

    title: {
        marginBottom: '1.5rem !important'
    },

    icon_container: {
        fontSize: '20px',
        color: 'gray',
        cursor: 'pointer',
        margin: '0px 20px',
        marginTop: '30px'
    },
});

const { Title } = Typography;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'My Account',
        disabled: true,
    },
    {
        type: 'divider',
    },
    {
        key: '2',
        label: 'Tài khoản của tôi',
        icon: <UserOutlined />,
        extra: '⌘P',
    },
    {
        key: '3',
        label: 'Xem đơn hàng',
        icon: <OrderedListOutlined />,
        extra: '⌘B',
    },
     {
        key: '4',
        label: 'Cài đặt',
        icon: <SettingOutlined />,
        extra: '⌘B',
    },
    {
        key: '5',
        label: 'Trợ giúp',
        icon: <QuestionCircleOutlined />,
        extra: '⌘S',
    },
    {
        key: '6',
        label: 'Đăng xuất',
        icon: <LogoutOutlined />,
        extra: '⌘S',
    },
];

const AppBar: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Header>
            <Space style={{ textAlign: 'start' }} wrap size={10}>
                <Image src={logoUrl} />

                <Title className={classes.title} level={4}>Blue shop</Title>
            </Space>

            <div className={classes.container}>
                <div>
                    <Link label={t('appbar_link.home')}></Link>
                    <Link label={t('appbar_link.category')}></Link>
                    <Link label={t('appbar_link.about')}></Link>
                </div>

                <div>
                    <Dropdown className={classes.icon_container} >
                        <a onClick={(e) => e.preventDefault()}>
                            <ShoppingCartOutlined />
                        </a>
                    </Dropdown>

                    <Dropdown menu={{ items }} className={classes.icon_container} >
                        <a onClick={(e) => e.preventDefault()}>
                            <BellOutlined />
                        </a>
                    </Dropdown>
                    <Dropdown menu={{ items }} className={classes.icon_container} >
                        <a onClick={(e) => e.preventDefault()}>
                            <MessageOutlined />
                        </a>
                    </Dropdown>
                </div>
            </div>

            <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Avatar icon={<UserOutlined />} />
                </a>
            </Dropdown>
        </Header>
    );
};

export default AppBar;