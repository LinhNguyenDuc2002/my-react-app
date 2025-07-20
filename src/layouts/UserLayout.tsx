import { Layout } from "antd";
import type React from "react";
import AppBar from "../components/AppBar";
import { Content } from "antd/lib/layout/layout";
import Footer from "../components/Footer";
import { createUseStyles } from "react-jss";
import { Outlet } from "react-router-dom";

const useStyles = createUseStyles({
    content: {
        margin: '50px'
    }
})

const UserLayout: React.FC = () => {
    const classes = useStyles();

    return(
        <Layout>
            <AppBar></AppBar>

            <Content className={classes.content}>
                <Outlet />
            </Content>

            <Footer></Footer>
        </Layout>
    );
}
export default UserLayout;