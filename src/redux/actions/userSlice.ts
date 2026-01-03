import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import handleResponse from '../../utils/handleResponse';
import defaultInstance from '../../data/axios_instances/defaultInstance';
import type { UserInfo, UserState } from '../../types/authentication';

const initialState: UserState = {
    data: null,
    loading: false,
    error: null,
    isAuthenticated: false,
};

export const fetchUserInfo = createAsyncThunk<UserInfo>('fetchUserInfo', async () => {
    const response = defaultInstance.get<UserInfo>('/users/me').then(handleResponse);
    return response;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserInfo|null>) {
            state.data = action.payload;
            state.isAuthenticated = true;
            state.error = null;
            state.loading = false;
        },

        clearUser(state) {
            state.data = null;
            state.isAuthenticated = false;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchUserInfo.pending, (state: any) => {
            state.loading = true;
            state.isAuthenticated = false;
            state.error = null;
        })
        .addCase(fetchUserInfo.fulfilled, (state: any, action) => {
            state.data = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
        })
        .addCase(fetchUserInfo.rejected, (state: any, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.error.message || 'Lỗi xảy ra';
        });
    },
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;