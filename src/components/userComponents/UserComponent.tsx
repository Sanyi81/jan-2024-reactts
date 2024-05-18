import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {Link} from "react-router-dom";

interface IProps {
    user: IUserModel
}
const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div>
            № {user.id}.<Link to={user.id.toString()}> {user.name}</Link>

        </div>
    );
};

export default UserComponent;