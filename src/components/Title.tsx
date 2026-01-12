import { Typography } from "antd";
import type { TitleProps as AntTitleProps } from "antd/es/typography/Title";
import type React from "react";

declare const TEXT_TRANSFORM: readonly ["capitalize", "uppercase", "lowercase", "none"];

interface TitleProps extends AntTitleProps {
    textTransform?: (typeof TEXT_TRANSFORM)[number],
}

const Title: React.FC<TitleProps> = ({ textTransform, ...props }) => {
    return (
        <Typography.Title {...props}
            style={{
                textTransform: textTransform ? textTransform : "none",
            }}
        />
    )
}

export default Title;