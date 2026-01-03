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

export interface UserInfo {
    id: String,
    username: String,
    display_name: String,
    dob: Date,
    avatarUrl: String,
    email: String,
    phone: String,
    sex: Boolean,
    firstLogin: Boolean,
}

export interface UserState {
    data: UserInfo | null;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}