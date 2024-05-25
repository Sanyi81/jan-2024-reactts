import React, {FC, useEffect, useState} from 'react';

import {IUserModel, UsersResponseModel} from "../../models";
import apiService from "../../services/axios.service";
import UserComponent from "./UserComponent";



const UsersComponent: FC<UsersResponseModel> = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        apiService.getAllUsers().then(({data}) => setUsers(data.users))
    }, []);

    return (
        <div>
            {users.map((user) => (<UserComponent key={user.id} user={user}/>))}
        </div>
    );
};

export default UsersComponent;