import React from "react";
import { FC } from "react";
import { useUserListController } from "../../controllers";
import UserItem from "../UserItem/UserItem";

const UsersListView: FC = () => {
    const { users, loading } = useUserListController();

    if (loading) {
        return <>Loading</>
    }

    return <>
        {users.map((user) => {
            return (
                <div key={user.id}>
                    <UserItem user={user} />
                </div>
            )
        })}
    </>

}

export default UsersListView;