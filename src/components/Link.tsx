import { Button as AntButton, type ButtonProps } from "antd";
import type React from "react";
import styled from '@emotion/styled';

const Button = styled(AntButton)`
    background-color: transparent;
    border: 0px;
    box-shadow: none;
    color: gray;

    &:hover {
        color: #03A9F4;
    }
`;

export const Link: React.FC<ButtonProps> = ({ ...props }) => {
    return (
        <Button {...props}></Button>
    )
}