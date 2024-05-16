import React, {FC} from "react";
import {IUserModel} from "../../model/userModel/IUserModel";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {

    return (
        <div>
            <h3>{user.id}. {user.name}</h3>
        </div>
    )

};

export default UserComponent;