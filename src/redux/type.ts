export interface UserInfo {
    id: String,
    username: String,
    firstName: String,
    lastName: String,
    dob: Date,
    avatarUrl: String,
    email: String,
    phone: String,
    sex: Boolean,
    firstLogin: Boolean,
}

export interface UserState {
    user: UserInfo | null;
}