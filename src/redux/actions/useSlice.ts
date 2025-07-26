import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserInfo, UserState } from '../type';

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserInfo>) {
            state.user = action.payload;
        },

        logout(state) {
            state.user = null;
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;