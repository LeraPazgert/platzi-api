import Image from "next/image";
import { FC } from "react";
import { IUser } from "../../types";

type UserItemProps = {
  user: IUser;
};

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <>
      <img src={user.avatar} alt='avatar' style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }} />
      {/*  <Image src={user.avatar} alt='avatar'
        width={50} height={50}
        style={{ borderRadius: '50%', marginRight: '15px' }} /> */}
      {user.name}
      <span style={{ marginLeft: '15px' }}>{user.email}</span>

    </>
  );
};

export default UserItem;
