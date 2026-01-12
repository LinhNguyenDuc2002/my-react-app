import { Layout } from "antd";
import type React from "react";
import AppBar from "../components/AppBar";
import { Content } from "antd/lib/layout/layout";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const UserLayout: React.FC = () => {
    return(
        <Layout style={{ height: '100vh' }}>
            <AppBar></AppBar>

            <Content style={{ margin: 'auto 20px', alignContent: 'center' }}>
                <Outlet />
            </Content>

            <Footer></Footer>
        </Layout>
    );
}
export default UserLayout;