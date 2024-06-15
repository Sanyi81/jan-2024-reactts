import React from 'react';
import {useAppSelector} from "../redux/store";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    let {users, isLoaded} = useAppSelector(state => state.userSlice);
    return (
        <div>
            {
                isLoaded ? users.map(user => <UserComponent key={user.id} user={user}/>)
                    :
                    <h3>Loading...</h3>
            }
        </div>
    );
};

export default UsersComponent;