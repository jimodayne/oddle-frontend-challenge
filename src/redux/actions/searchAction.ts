import { ResponseData } from "@/interface/response";
import { Dispatch } from "redux";
import SearchService, { IUserList } from "../../modules/search/service";
import { SET_USERS, SET_PAGE } from "../types/searchType";

export const setUsers = (users: IUserList[]) => ({
    type: SET_USERS,
    payload: users,
});

export const setPage = (page: number) => ({
    type: SET_PAGE,
    payload: page,
});

export const setTotal = (total: number) => ({
    type: SET_PAGE,
    payload: total,
});

export const fetchUsers = (username: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await SearchService.fetchUsers({
            q: username,
            per_page: 20,
        });
        dispatch(setUsers(data.items));
        dispatch(setTotal(data.total_count));
    } catch (err) {
        console.log(err);
    }
};
