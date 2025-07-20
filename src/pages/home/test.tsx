import React, {useState, useEffect} from "react";
import { Column } from '@ant-design/plots';
import { useParams } from "react-router-dom";
import { useFetch } from "../../data/common";

const Test: React.FC = () => {
    // const { id } = useParams<{ id: string }>();

    // const { data, isLoading, error } = useFetch(`https://render.alipay.com/p/yuyan/${id}/antd-charts/column-column.json`, id)
    const { data, isLoading, error } = useFetch(`https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/column-column.json`,"180020010001215413")

    if(isLoading) return <div>Loading ...</div>
    if(error) return <div>Error</div>

    const config = {
        data: data,
        xField: 'letter',
        yField: 'frequency',
        label: {
        text: (d) => `${(d.frequency * 100).toFixed(1)}%`,
        textBaseline: 'bottom',
        },
        axis: {
        y: {
            labelFormatter: '.0%',
        },
        },
        style: {
        // 圆角样式
        radiusTopLeft: 10,
        radiusTopRight: 10,
        },
    };
    return <Column {...config} />;
}

export default Test;