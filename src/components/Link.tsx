import { Button as AntButton } from "antd";
import type React from "react";
import styled from '@emotion/styled';

interface Data {
    label: string
}

const Button = styled(AntButton)`
    background-color: transparent;
    border: 0px;
    box-shadow: none;
    font-size: 16px;
    color: gray;
    margin: 0px 10px;

    &:hover {
        color: #03A9F4;
    }
`;

export const Link: React.FC<Data> = ({ label }) => {
    return (
        <Button>{label}</Button>
    )
}