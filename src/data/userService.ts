import type { UserInfo } from "../redux/type";
import type { DefaultResponse } from "../types/common";
import defaultAxiosInstance from "./axios_instances/defaultAxiosInstance";
import { useAction, useFetch } from "./common";

export const useGetLoggedInUser = () => {
    return useFetch<DefaultResponse<UserInfo>>(defaultAxiosInstance, ["user_info"], '');
}