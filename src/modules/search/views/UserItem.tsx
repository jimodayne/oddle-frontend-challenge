import { FC } from "react";
import { IUserList } from "../service";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import styles from "./item.module.css";

interface UserItemProps {
    user: IUserList;
}

const UserItem: FC<UserItemProps> = props => {
    const { user } = props;
    return (
        <Card>
            <Grid container>
                <Grid item xs={4}>
                    <img className={styles.image} src={user.avatar_url} />
                </Grid>
                <Grid item xs={8}>
                    <b>{user.login}</b>
                </Grid>
            </Grid>
        </Card>
    );
};

export default UserItem;
