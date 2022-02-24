import { AnyAction } from "redux";
import { IUserList } from "../../modules/search/service";
import { SET_USERS } from "../types/searchType";

interface SearchState {
    users: IUserList[];
    total_count: number;
}

const initialState: SearchState = {
    users: [],
    total_count: 0,
};

const searchReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
};

export default searchReducer;
