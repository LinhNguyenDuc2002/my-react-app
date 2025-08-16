export type Credentials = {
    username: string;
    password: string;
    remember: boolean;
}

export type Oauth2Form = {
    client_id: string;
    client_secret: string;
    grant_type: string;
    username: string;
    password: string;
}