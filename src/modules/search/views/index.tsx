import { TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import throttle from "lodash.throttle";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../../redux/actions/searchAction";
import UserList from "./UserList";

const SearchView = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleChange = useCallback(
        throttle(str => {
            dispatch(fetchUsers(str));
        }, 400),
        [],
    );

    useEffect(() => {
        if (value) {
            handleChange(value);
        }
    }, [value]);

    return (
        <div>
            <h1>Search</h1>
            <TextField
                value={value}
                onChange={e => setValue(e.target.value)}
                fullWidth
                label="fullWidth"
                id="fullWidth"
            />

            <p>
                Enter GitHub username and search users matching the input like Google Search, click
                avatars to view more details, including repositories, followers and following
            </p>

            <UserList />
        </div>
    );
};

export default SearchView;
