import type React from "react";
import { Tabs } from "../../components/Tabs";
import type { TabsProps } from "antd";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Tab 1',
            children: <div>OK1</div>,
        },
        {
            key: '180020010001215413',
            label: 'Tab 2',
            // children: <Test />,
        },
        {
            key: '3',
            label: 'Tab 3',
            children: <div>OK3</div>,
        },
    ];

    return (
        <>
            <div style={{ height: '500px'}}>
                <Tabs items={items} onChange={(key: string) => navigate(`/admin/${key}`)} destroyOnHidden={true}></Tabs>
                {/* destroyOnHidden={true}: hủy các tab đang không hoạt động */}
            </div>
        </>
    )
}

export default Home;