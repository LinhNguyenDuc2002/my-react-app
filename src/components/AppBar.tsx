import React from 'react';
import { Avatar, Image, Layout, Menu, Space, Typography } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined, ShoppingCartOutlined, BellOutlined, MessageOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { createUseStyles } from 'react-jss';
import logoUrl from '../assets/react.svg';
import { SearchBox } from './SearchBox';
import { Link } from './Link';
import { useTranslation } from 'react-i18next';

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

const AppBar: React.FC = () => {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <Header>
            <Space style={{ width: '10%', textAlign: 'start' }} wrap size={10}>
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
                    <ShoppingCartOutlined className={classes.icon_container} />
                    <BellOutlined className={classes.icon_container} />
                    <MessageOutlined className={classes.icon_container} />
                </div>
            </div>

            <div style={{ width: '10%', textAlign: 'end' }}>
                <Avatar icon={<UserOutlined />} />
            </div>
        </Header>
    );
};

export default AppBar;