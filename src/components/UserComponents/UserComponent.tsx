import React, {FC} from 'react';
import {IUserModel} from "../../models";

interface IProps {
    user: IUserModel
}
const UserComponent: FC<IProps> = ({user}) => {

    return (
        <div>
            <h3>{user.id}. {user.firstName} {user.lastName}</h3>
            <h4>{user.username}</h4>
        </div>
    );
};

export default UserComponent;