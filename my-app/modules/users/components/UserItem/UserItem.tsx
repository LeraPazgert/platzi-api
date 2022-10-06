import { FC } from "react";
import { IUser } from "../../types";

type UserItemProps = {
  user: IUser;
};

const UserItem:FC<UserItemProps> = ({ user }) => {
  return (
    <div>{user.id} {user.name} {user.role}</div>
  );
};

export default UserItem;
