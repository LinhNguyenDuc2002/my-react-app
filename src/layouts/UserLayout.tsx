import { Layout } from "antd";
import type React from "react";
import AppBar from "../components/AppBar";
import { Content } from "antd/lib/layout/layout";
import Home from "../pages/home/Home";

export const UserLayout: React.FC = () => {
    return(
        <>
            <Layout>
                <AppBar></AppBar>

                <Content>
                    <Home></Home>
                </Content>


            </Layout>
        </>
    );
}