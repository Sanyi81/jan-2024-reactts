import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../models/IUserModel";
import apiService from "../../services/axois.service";
import UserComponent from "./UserComponent";

interface IProps {
    users: IUserModel[]
}

const UsersComponent: FC<IProps> = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        apiService.getAllUsers().then(value => setUsers(value.data))
    }, []);
    return (
        <div>
            {users.map((user: IUserModel) => <UserComponent key={user.id} user={user}/> )}
        </div>
    );
};

export default UsersComponent;