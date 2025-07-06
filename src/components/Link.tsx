import { Button as AntButton } from "antd";
import type React from "react";
import styled from '@emotion/styled';
import type { SizeType } from "antd/lib/config-provider/SizeContext";

interface Data {
    label: string,
    size?: SizeType
}

const Button = styled(AntButton)`
    background-color: transparent;
    border: 0px;
    box-shadow: none;
    color: gray;
    margin: 0px 10px;

    &:hover {
        color: #03A9F4;
    }
`;

export const Link: React.FC<Data> = ({ label, size, ...props }) => {
    return (
        <Button size={size} {...props}>{label}</Button>
    )
}