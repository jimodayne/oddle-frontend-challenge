import { usersSelector } from "@/redux/selectors/searchSelector";
import { useSelector } from "react-redux";
import { IUserList } from "../service";
import UserItem from "./UserItem";

const UserList = () => {
    const users = useSelector(usersSelector);
    console.log("UserList", users);
    return (
        <>
            {users?.map((user: IUserList) => (
                <UserItem key={user.id} user={user} />
            ))}
        </>
    );
};

export default UserList;
