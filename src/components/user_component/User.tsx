import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps {
    user: IUserModel;
}

type IPropsType = IProps & { children?: React.ReactNode } & { lift?: (userId: number) => void }

const User: FC<IPropsType> = ({user, lift}) => {

    const onclickHandler = () => {
        if (lift) {
            lift(user.id)
        }
    };

    return (
        <div>
           <h3> {user.id}. {user.firstName} {user.lastName} </h3>
           <h4>{user.age}, {user.gender}</h4>
            <p>Phone: {user.phone} / Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Date of birth: {user.birthDate}</p>
            <div>
                <button onClick={onclickHandler}>Show posts</button>
            </div>
        </div>
    );
};

export default User;