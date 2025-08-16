import { Input } from "antd";
import type React from "react";

const { Search } = Input;

interface Data {
    placeholder?: string
}

export const SearchBox: React.FC<Data> = ({ placeholder }) => {
    return (
        <Search
            placeholder={placeholder}
            allowClear
            enterButton="Search"
            size="large"
            loading={true}
            // onSearch={onSearch}
        />
    );
}