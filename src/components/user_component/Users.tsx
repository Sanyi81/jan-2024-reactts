import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {getAllUsers} from "../srevices/axios.service";
import User from "./User";

type IPropsType = { lift?: (userId: number) => void };

const Users: FC<IPropsType> = ({lift}) => {

    const [users, setUsers] = useState<IUserModel[]>([])
    
    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data.users));
    }, []);

    return (
        <div>
            {
                users.map((user) =>
                    (<User key={user.id} user={user} lift={lift}/>)
                )
            };
        </div>
    );
};

export default Users;