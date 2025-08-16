import type React from "react";
import { Tabs as AntTabs } from 'antd';
import { type TabsProps } from 'antd';

export const Tabs: React.FC<TabsProps> = ({ children, ...props }) => {
    return (
        <AntTabs {...props}>{children}</AntTabs>
    )
}