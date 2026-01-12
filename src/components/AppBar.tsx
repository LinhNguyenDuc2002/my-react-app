import React from 'react';
import { Avatar, Dropdown, Image, Layout, Space, Typography } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined, ShoppingCartOutlined, BellOutlined, MessageOutlined, OrderedListOutlined, QuestionCircleOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { createUseStyles } from 'react-jss';
import logoUrl from '../assets/react.svg';
import { Link } from './Link';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import type { RootState } from '../redux/store';
import { ROUTE_CONSTANTS } from '../routes/RouteConstant';
import { clearUser } from '../redux/actions/userSlice';

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

const AppBar: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { data, loading, error, isAuthenticated } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: data?.display_name,
            style: { fontWeight: 'bold' }
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: t('header_menu.my_account'),
            icon: <UserOutlined />,
            extra: '⌘P',
        },
        {
            key: '3',
            label: t('header_menu.view_orders'),
            icon: <OrderedListOutlined />,
            extra: '⌘B',
        },
        {
            key: '4',
            label: t('header_menu.settings'),
            icon: <SettingOutlined />,
            extra: '⌘B',
        },
        {
            key: '5',
            label: t('header_menu.help'),
            icon: <QuestionCircleOutlined />,
            extra: '⌘S',
        },
        {
            key: '6',
            label: t('header_menu.logout'),
            icon: <LogoutOutlined />,
            extra: '⌘S',
            onClick: () => {
                sessionStorage.removeItem('access_token');
                sessionStorage.removeItem('refresh_token');
                dispatch(clearUser());
                navigate(ROUTE_CONSTANTS.login);
            }
        },
    ];

    return (
        <Header>
            <Space style={{ textAlign: 'start' }} wrap size={10}>
                <Image src={logoUrl} />

                <Title className={classes.title} level={4}>Blue shop</Title>
            </Space>

            <div className={classes.container}>
                <div>
                    <Link onClick={() => navigate(ROUTE_CONSTANTS.home)}>{t('appbar_link.home')}</Link>
                    <Link>{t('appbar_link.category')}</Link>
                    <Link>{t('appbar_link.about')}</Link>
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

            { isAuthenticated ? 
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Avatar icon={<UserOutlined />} />
                    </a>
                </Dropdown>
                :
                <Link onClick={() => navigate(ROUTE_CONSTANTS.login)}>{t('button.login')}</Link>
            }
        </Header>
    );
};

export default AppBar;