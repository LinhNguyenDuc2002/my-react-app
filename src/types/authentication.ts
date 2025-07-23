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

export type Oauth2Response = {
    access_token: string,
    refresh_token: string,
    scope: string,
    token_type: string,
    expires_in: number
}