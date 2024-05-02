import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import {getAllUsers} from "../srevices/axios.service";
import User from "./User";

// type IPropsType = { lift?: (userId: number) => void };

const Users: FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        getAllUsers().then(({data}) => setUsers(data));
    }, []);

    return (
        <div>
            {
                users.map(
                    (user:IUserModel) =>
                    (<User key={user.id} user={user}/>)
                )
            }
        </div>
    );
};

export default Users;