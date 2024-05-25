import React, {FC} from 'react';
import {IUserModel} from "../../models";

interface IProps {
    user: IUserModel
}
const UserComponent: FC<IProps> = ({user}) => {

    return (
        <div>
            <h3>{user.id}. {user.firstName} {user.lastName}
                <br/>
                {user.username}
            </h3>
        </div>
    );
};

export default UserComponent;