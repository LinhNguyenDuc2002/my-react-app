import { Typography } from "antd"
import React from "react"
import { useState } from "react";

type Data = {
    content: string;
    row?: number;
    // children: React.ReactNode;
    [key: string]: any;
}

export const Paragraph: React.FC<Data> = ({ content, row = 2, ...props }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Typography.Paragraph
            style={{ whiteSpace: 'pre-wrap' }}
            ellipsis={{
                rows: row,
                expandable: 'collapsible',
                expanded,
                onExpand: (_, info) => setExpanded(info.expanded),
            }}
            {...props}
        >
            {content.split('\\n').map((line, index) => (
                <span key={index}>
                    {line}
                    {index < content.split('\\n').length - 1 && <br />}
                </span>
            ))}
        </Typography.Paragraph>
    )
}