import { useParams } from "react-router-dom";

const UserView = () => {
    const { username } = useParams();
    return (
        <div>
            <h1>User</h1>
            <h4>username: {username}</h4>
        </div>
    );
};

export default UserView;
