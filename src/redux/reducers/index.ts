import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
    // Add reducers here
    search: searchReducer,
});

export default rootReducer;
