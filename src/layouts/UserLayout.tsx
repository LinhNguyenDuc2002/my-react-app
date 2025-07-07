import { Layout } from "antd";
import type React from "react";
import AppBar from "../components/AppBar";
import { Content } from "antd/lib/layout/layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Footer from "../components/Footer";
import { createUseStyles } from "react-jss";
import Signup from "../pages/signup/Signup";
import OTP from "../pages/common/OTP";

const useStyles = createUseStyles({
    content: {
        margin: '50px'
    }
})

export const UserLayout: React.FC = () => {
    const classes = useStyles();

    return(
        <Layout>
            <AppBar></AppBar>

            <Content className={classes.content}>
                <OTP />
            </Content>

            <Footer></Footer>
        </Layout>
    );
}