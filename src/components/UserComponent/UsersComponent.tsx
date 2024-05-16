import React, {FC, useEffect, useState} from "react";
import {IUserModel} from "../../model/userModel/IUserModel";
import {userService} from "../../services/axios.service";
import UserComponent from "./UserComponent";

interface IProps {
    users: IUserModel[]
}

const UsersComponent: FC<IProps> = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

useEffect(() => {
    userService.getAllUsers().then(value => setUsers(value.data));
}, []);

return (
    <div>
        {users.map((user: IUserModel) => <UserComponent user={user} key={user.id}/>)}
    </div>
)

}

export default UsersComponent;