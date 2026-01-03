import type { UserInfo } from "../types/authentication";
import type { DefaultResponse } from "../types/common";
import defaultInstance from "./axios_instances/defaultInstance";
import { useAction, useFetch } from "./common";

export const useGetLoggedInUser = () => {
    return useFetch<DefaultResponse<UserInfo>>(defaultInstance, ["user_info"], '');
}