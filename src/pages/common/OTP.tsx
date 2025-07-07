import { Button, Card, Input, type GetProps } from "antd";
import type React from "react";
import { Paragraph } from "../../components/Paragraph";
import { createUseStyles } from "react-jss";
import { Link } from "../../components/Link";

const useStyles = createUseStyles({
    container: {
       width: '100%',
       height: '75vh',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center'
    },

    button_container: {
        margin: '20px 0px',
    },

    card: {
        maxWidth: '500px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2) !important',
    }
})

type OTPProps = GetProps<typeof Input.OTP>;

const OTP: React.FC = () => {
    const classes = useStyles();

    const onChange: OTPProps['onChange'] = (text) => {
        console.log('onChange:', text);
    };

    const onInput: OTPProps['onInput'] = (value) => {
        console.log('onInput:', value);
    };

    const sharedProps: OTPProps = {
        onChange,
        onInput,
    };

    return (
        <div className={classes.container}>
            <Card title="Xác thực tài khoản" variant="borderless" className={classes.card}>
                <Paragraph copyable={false} 
                    content="Chúng tôi đã gửi mã xác thực tới.\nHãy kiểm tra email của bạn và nhập mã code bên dưới.">
                </Paragraph>

                <Input.OTP 
                    style={{ margin: '10px 0px' }}
                    size="large"
                    formatter={(str: string|undefined) => {
                        if (str === undefined || str == 'Backspace') return '';
                        return /^[0-9]*$/.test(str) ? str : '';
                    }} 
                    {...sharedProps}>
                </Input.OTP>

                <div className={classes.button_container}>
                    <Button type="primary">Xác thực</Button>
                </div>

                <div>
                    Bạn chưa nhận được mã?<Link size='small' label='Click here'></Link>
                </div>
            </Card>
        </div>
    )
}

export default OTP;