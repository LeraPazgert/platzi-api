import { FC } from "react";
import { UserItemProps } from "./types";

const UserItem:FC<UserItemProps> = ({ user }) => {
  return (
    <div>{user.id} {user.name} {user.role}</div>
  );
};

export default UserItem;
